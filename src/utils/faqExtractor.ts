export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessedFAQ {
  items: FAQItem[];
  html: string;
}

export function processFAQs(content: string): ProcessedFAQ {
  const faqs: FAQItem[] = [];
  const hasFAQSection = /<p><strong>FAQs?<\/strong><\/p>/i.test(content) || 
                        /<h2[^>]*>FAQs?<\/h2>/i.test(content);
  
  if (!hasFAQSection) {
    return { items: [], html: content };
  }
  
  let transformedContent = content;
  transformedContent = transformedContent.replace(
    /<(?:p|h2)[^>]*>(?:<strong>)?FAQs?(?:<\/strong>)?<\/(?:p|h2)>/i,
    '<h2 class="faq-heading">FAQs</h2>'
  );
  const faqItemRegex = /<p[^>]*><strong>(\d+\.\s*)([^<]+?)<\/strong><br\s*\/?>\s*([\s\S]*?)<\/p>/gi;
  
  transformedContent = transformedContent.replace(faqItemRegex, (match, numberPrefix, questionText, answerText) => {
    const cleanQuestion = questionText.trim();
    const cleanAnswer = answerText
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const finalQuestion = cleanQuestion.endsWith('?') ? cleanQuestion : cleanQuestion + '?';
    if (finalQuestion && cleanAnswer) {
      faqs.push({
        question: finalQuestion,
        answer: cleanAnswer
      });
    }
    
    return `<h3 class="faq-question">${finalQuestion}</h3>
    <p class="faq-answer">${cleanAnswer}</p>`;
  });
  const edgeCaseRegex = /<strong>(\d+\.\s*)([^<]+?)<\/strong><br\s*\/?>\s*([\s\S]*?)(?=<strong>|$)/gi;
  
  if (faqs.length === 0) {
    transformedContent = transformedContent.replace(edgeCaseRegex, (match, numberPrefix, questionText, answerText) => {
      const cleanQuestion = questionText.trim();
      const cleanAnswer = answerText
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      const finalQuestion = cleanQuestion.endsWith('?') ? cleanQuestion : cleanQuestion + '?';
      
      if (finalQuestion && cleanAnswer) {
        faqs.push({
          question: finalQuestion,
          answer: cleanAnswer
        });
      }
      
      return `<h3 class="faq-question">${finalQuestion}</h3>
          <p class="faq-answer">${cleanAnswer}</p>`;
    });
  }
  
  return { items: faqs, html: transformedContent };
}

/**
 * Generate Schema.org JSON-LD for FAQs
 */
export function generateFAQSchema(faqs: FAQItem[], pageUrl: string) {
  if (!faqs.length) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": pageUrl
  };
}