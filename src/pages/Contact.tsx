import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // TODO: Implement form submission logic
    console.log('Form data:', data);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
              <p className="text-muted-foreground">
                Have questions or need assistance? We're here to help. Fill out the form
                below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Office Location</h3>
                    <p className="text-muted-foreground">
                      123 Tech Hub Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a
                      href="mailto:contact@skilledconnects.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@skilledconnects.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="SkilledConnects Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6283995841964!2d-122.08374688468226!3d37.42199997982448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1624308999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}