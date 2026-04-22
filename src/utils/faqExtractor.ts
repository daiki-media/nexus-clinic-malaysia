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
  // Check if FAQ section exists
  const hasFAQSection = /<p[^>]*><strong>FAQs?<\/strong><\/p>/i.test(content) ||
                        /<h2[^>]*>FAQs?<\/h2>/i.test(content) ||
                        /<strong>FAQs?<\/strong>/i.test(content) ||
                        /id="faqs"/i.test(content);
  
  if (!hasFAQSection) {
    return { items: [], html: content };
  }
  
  let transformedContent = content;
  
  // Replace FAQ heading with clean h2 tag
  transformedContent = transformedContent.replace(
    /<p[^>]*><strong>FAQs?<\/strong><\/p>|<h2[^>]*>FAQs?<\/h2>|<strong>FAQs?<\/strong>/gi,
    '<h2 class="faq-heading">FAQs</h2>'
  );
  
  // Extract FAQ section content
  let faqSection = content;
  const faqSectionMatch = content.match(/(?:<p[^>]*><strong>FAQs?<\/strong><\/p>|<h2[^>]*>FAQs?<\/h2>|<strong>FAQs?<\/strong>)([\s\S]*?)(?=<h[12]|$)/i);
  if (faqSectionMatch) {
    faqSection = faqSectionMatch[1];
  }
  
  // Helper function to clean answer text
  const cleanAnswer = (text: string): string => {
    return text
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };
  
  // Helper function to clean question text (remove numbers and dots)
  const cleanQuestion = (text: string): string => {
    let cleaned = text
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    // Remove leading numbers like "1.", "2.", "1)", "1 -", etc.
    cleaned = cleaned.replace(/^\d+[\.\)\-]\s*/, '');
    cleaned = cleaned.replace(/^\d+\s+/, '');
    // Remove "Q:" prefix if present
    cleaned = cleaned.replace(/^Q:\s*/i, '');
    // Ensure ends with question mark
    if (!cleaned.endsWith('?') && !cleaned.endsWith('？')) {
      cleaned = cleaned + '?';
    }
    return cleaned;
  };
  
  // PATTERN 1: List item with h4 inside (YOUR NEW FORMAT)
  // Format: <li><h4>Question?</h4><p>Answer</p></li>
  const pattern1 = /<li[^>]*>\s*<h4[^>]*>([^<]+)<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi;
  
  // PATTERN 2: List item with h4 and answer without p tag
  // Format: <li><h4>Question?</h4> Answer</li>
  const pattern2 = /<li[^>]*>\s*<h4[^>]*>([^<]+)<\/h4>\s*([\s\S]*?)<\/li>/gi;
  
  // PATTERN 3: Numbered format with <strong>
  const pattern3 = /<strong>(\d+\.\s*)([^<]+?)<\/strong>(?:<br\s*\/?>)?\s*([\s\S]*?)(?=<strong>|$)/gi;
  
  // PATTERN 4: Paragraph format with <strong> inside
  const pattern4 = /<p[^>]*><strong>(\d+\.\s*)([^<]+?)<\/strong>([\s\S]*?)<\/p>/gi;
  
  // PATTERN 5: h4 with p tag (standard format)
  const pattern5 = /<h4[^>]*>([^<]+)<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  
  // PATTERN 6: h4 without p tag (answer in same li or next line)
  const pattern6 = /<h4[^>]*>([^<]+)<\/h4>\s*([\s\S]*?)(?=<h4|<\/li|$)/gi;
  
  // PATTERN 7: Plain paragraph pairs
  const pattern7 = /<p[^>]*><strong>([^?]+?\?)<\/strong><\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  
  let match;
  let found = false;
  
  // Try Pattern 1 (li with h4 and p)
  while ((match = pattern1.exec(faqSection)) !== null) {
    let question = match[1].trim();
    let answer = match[2].trim();
    
    if (!answer || answer.length < 5) continue;
    
    question = cleanQuestion(question);
    answer = cleanAnswer(answer);
    
    if (question && answer) {
      faqs.push({ question, answer });
      found = true;
    }
  }
  
  // Try Pattern 2 (li with h4, answer without p)
  if (!found) {
    while ((match = pattern2.exec(faqSection)) !== null) {
      let question = match[1].trim();
      let answer = match[2].trim();
      
      if (!answer || answer.length < 5) continue;
      
      question = cleanQuestion(question);
      answer = cleanAnswer(answer);
      
      if (question && answer) {
        faqs.push({ question, answer });
        found = true;
      }
    }
  }
  
  // Try Pattern 3 (numbered format)
  if (!found) {
    while ((match = pattern3.exec(faqSection)) !== null) {
      let question = match[2].trim();
      let answer = match[3].trim();
      
      if (!answer || answer.length < 10) continue;
      
      question = cleanQuestion(question);
      answer = cleanAnswer(answer);
      
      if (question && answer) {
        faqs.push({ question, answer });
        found = true;
      }
    }
  }
  
  // Try Pattern 4 (paragraph with strong)
  if (!found) {
    while ((match = pattern4.exec(faqSection)) !== null) {
      let question = match[2].trim();
      let answer = match[3].trim();
      
      if (!answer || answer.length < 10) continue;
      
      question = cleanQuestion(question);
      answer = cleanAnswer(answer);
      
      if (question && answer) {
        faqs.push({ question, answer });
        found = true;
      }
    }
  }
  
  // Try Pattern 5 (h4 with p)
  if (!found) {
    while ((match = pattern5.exec(faqSection)) !== null) {
      let question = match[1].trim();
      let answer = match[2].trim();
      
      if (!answer || answer.length < 10) continue;
      
      question = cleanQuestion(question);
      answer = cleanAnswer(answer);
      
      if (question && answer) {
        faqs.push({ question, answer });
        found = true;
      }
    }
  }
  
  // Try Pattern 6 (h4 without p)
  if (!found) {
    const tempSection = faqSection;
    const h4Matches = tempSection.match(/<h4[^>]*>([^<]+)<\/h4>/gi);
    
    if (h4Matches && h4Matches.length > 0) {
      for (let i = 0; i < h4Matches.length; i++) {
        const h4Match = h4Matches[i];
        const questionMatch = h4Match.match(/<h4[^>]*>([^<]+)<\/h4>/i);
        if (!questionMatch) continue;
        
        let question = questionMatch[1].trim();
        
        // Find the answer (content after this h4 until next h4 or end)
        let answerStart = tempSection.indexOf(h4Match) + h4Match.length;
        let answerEnd = tempSection.length;
        
        if (i + 1 < h4Matches.length) {
          answerEnd = tempSection.indexOf(h4Matches[i + 1]);
        }
        
        let answer = tempSection.substring(answerStart, answerEnd);
        
        // Clean up answer - remove any list tags and extra whitespace
        answer = answer
          .replace(/<\/?p[^>]*>/gi, ' ')
          .replace(/<\/?ul[^>]*>/gi, ' ')
          .replace(/<\/?li[^>]*>/gi, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        if (!answer || answer.length < 5) continue;
        
        question = cleanQuestion(question);
        answer = cleanAnswer(answer);
        
        if (question && answer) {
          faqs.push({ question, answer });
          found = true;
        }
      }
    }
  }
  
  // Try Pattern 7 (plain paragraphs)
  if (!found) {
    while ((match = pattern7.exec(faqSection)) !== null) {
      let question = match[1].trim();
      let answer = match[2].trim();
      
      if (!answer || answer.length < 10) continue;
      
      question = cleanQuestion(question);
      answer = cleanAnswer(answer);
      
      if (question && answer) {
        faqs.push({ question, answer });
        found = true;
      }
    }
  }
  
  // If FAQs found, transform the entire FAQ section in the content
  if (faqs.length > 0) {
    // Find the FAQ section in the original content
    const faqStartRegex = /(?:<p[^>]*><strong>FAQs?<\/strong><\/p>|<h2[^>]*>FAQs?<\/h2>|<strong>FAQs?<\/strong>)/i;
    const faqStartMatch = transformedContent.match(faqStartRegex);
    
    if (faqStartMatch) {
      const startIndex = faqStartMatch.index!;
      let endIndex = transformedContent.length;
      
      // Find the next heading after FAQs
      const nextHeadingMatch = transformedContent.substring(startIndex + faqStartMatch[0].length).match(/<h[12][^>]*>/i);
      if (nextHeadingMatch) {
        endIndex = startIndex + faqStartMatch[0].length + nextHeadingMatch.index!;
      }
      
      // Build clean FAQ HTML
      let cleanFAQHtml = '<h2 class="faq-heading">FAQs</h2>\n';
      for (const faq of faqs) {
        cleanFAQHtml += `<h3 class="faq-question">${faq.question}</h3>\n`;
        cleanFAQHtml += `<p class="faq-answer">${faq.answer}</p>\n`;
      }
      
      // Replace the entire FAQ section
      transformedContent = transformedContent.substring(0, startIndex) + cleanFAQHtml + transformedContent.substring(endIndex);
    }
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