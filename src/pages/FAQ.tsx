import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I create an account on SkilledConnects?',
    answer: 'Click the "Join Now" button in the top navigation bar and follow the registration process. You\'ll need to provide basic information and verify your email address.',
    category: 'Getting Started'
  },
  {
    id: 'faq-2',
    question: 'What types of projects can I find on SkilledConnects?',
    answer: 'SkilledConnects specializes in tech and digital projects, including web development, mobile app development, UI/UX design, data science, and more.',
    category: 'Projects'
  },
  {
    id: 'faq-3',
    question: 'How does the payment system work?',
    answer: 'We use a secure escrow system. Clients deposit funds before work begins, and payment is released to freelancers upon successful project completion.',
    category: 'Payments'
  },
  {
    id: 'faq-4',
    question: 'Can I hire multiple freelancers for a project?',
    answer: 'Yes, you can hire multiple freelancers for different aspects of your project or build a complete team through our platform.',
    category: 'Hiring'
  },
  {
    id: 'faq-5',
    question: 'What are the fees for using SkilledConnects?',
    answer: 'We charge a competitive service fee that varies based on the project value. The exact fee structure is transparent and visible before you start any project.',
    category: 'Payments'
  },
  {
    id: 'faq-6',
    question: 'How do you verify freelancer skills?',
    answer: 'Freelancers undergo a verification process that includes portfolio review, skill assessments, and reference checks where applicable.',
    category: 'Quality Assurance'
  },
  {
    id: 'faq-7',
    question: 'What happens if I\'m not satisfied with the work?',
    answer: 'We have a dispute resolution process in place. If you\'re not satisfied, you can raise a dispute, and our team will help mediate and resolve the issue.',
    category: 'Support'
  },
  {
    id: 'faq-8',
    question: 'Can I work on SkilledConnects part-time?',
    answer: 'Yes, you can choose your own schedule and workload. Many freelancers successfully work part-time on our platform.',
    category: 'Freelancing'
  },
  {
    id: 'faq-9',
    question: 'How do I communicate with clients/freelancers?',
    answer: 'Our platform provides a built-in messaging system for direct communication. You can also schedule video calls when needed.',
    category: 'Communication'
  },
  {
    id: 'faq-10',
    question: 'What support does SkilledConnects provide?',
    answer: 'We offer 24/7 customer support, dispute resolution, payment protection, and various resources to help both clients and freelancers succeed.',
    category: 'Support'
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            aria-label="Search FAQ questions"
          />
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {filteredFAQs.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="bg-card rounded-lg border p-4">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No questions found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}