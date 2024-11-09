"use server"
import { Resend } from "resend";
import EmailTemplate from "@/emails/EmailTemplate";
import NewsletterTemplate from "@/emails/NewsletterTemplate";

interface State {
  error: string | null;
  success: boolean;
}

interface SendEmailResponse {
  error: string | null;
  success: boolean;
}

export const sendEmail = async (prevState: State, formData: FormData): Promise<SendEmailResponse> => {
  const name = formData.get("name") as string || '';
  const email = formData.get("email") as string || '';
  const subject = formData.get("subject") as string || '';
  const message = formData.get("message") as string || '';

  const emailReceiver = process.env.EMAIL_RECEIVER;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!emailReceiver || !resendApiKey) {
    console.error("Missing environment variables.");
    return {
      error: "Configuration error",
      success: false,
    };
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: 'Josglobal Sarl <onboarding@resend.dev>',
      to: emailReceiver,
      subject: subject,
      react: EmailTemplate({ name, email, subject, message }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};

export const sendNewsletter = async (subscribers: string[], content: string): Promise<SendEmailResponse> => {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return {
      error: "Configuration error",
      success: false,
    };
  }
  try {
    const resend = new Resend(resendApiKey);

    // Send email to each subscriber
    for (const subscriber of subscribers) {
      await resend.emails.send({
        from: 'Josglobal Sarl Newsletter <onboarding@resend.dev>', // Update this with your actual domain
        to: subscriber,
        subject: "Your Newsletter", // You might want to make this dynamic
        react: NewsletterTemplate({ content }),
      });
    }

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error("Newsletter sending failed:", error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};