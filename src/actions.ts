"use server"
import { Resend } from "resend";
import EmailTemplate from "@/emails/EmailTemplate";

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
