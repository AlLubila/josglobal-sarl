import { Html, Head, Body, Container, Text, Heading, Section } from "@react-email/components";

const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
              background-color: white;
              border: 1px solid #e6e6e6;
              border-radius: 6px;
            }
            h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              color: #666;
              line-height: 1.6;
              margin-bottom: 20px;
            }
            .label {
              font-size: 16px;
              font-weight: bold;
              color: #333;
              margin-bottom: 5px;
            }
            .value {
              font-size: 18px;
              color: #007BFF;
              margin-bottom: 20px;
            }
            .message-box {
              padding: 15px;
              background-color: #f2f4f6;
              border-radius: 5px;
              font-size: 16px;
              color: #333;
              line-height: 1.6;
              border-left: 4px solid #007BFF;
            }
            .footer {
              font-size: 12px;
              color: #999;
              margin-top: 40px;
              text-align: center;
            }
          `}
        </style>
      </Head>
      <Body>
        <Container className="container">
          <Heading as="h1">New Form Submission</Heading>
          <Text>Hello Admin,</Text>
          <Text>We have received a new form submission with the following details:</Text>

          <Section>
            <Text>
              <span className="label">Name:</span>
              <span className="value"> {name}</span>
            </Text>
            <Text>
              <span className="label">Email:</span>
              <span className="value"> {email}</span>
            </Text>
          </Section>

          <Section className="message-box">
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
