import { Html, Head, Body, Container, Text, Heading, Section } from "@react-email/components";

const NewsletterTemplate = ({
  content,
}: {
  content: string;
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
            .content {
              padding: 15px;
              background-color: #f2f4f6;
              border-radius: 5px;
              font-size: 16px;
              color: #333;
              line-height: 1.6;
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
          <Heading as="h1">Josglobal Sarl Newsletter</Heading>
          <Text>Dear Subscriber,</Text>
          <Text>Here's the latest news from Josglobal Sarl:</Text>

          <Section className="content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Section>

          <Text className="footer">
            Thank you for subscribing to our newsletter. If you wish to unsubscribe, please click here.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsletterTemplate;