import { Html, Head, Body, Container, Text, Heading, Section } from "@react-email/components";

const NewsletterTemplate = ({
  content,
}: {
  content: string;
}) => {
  return (
    <Html lang="fr"> {/* Change language to French */}
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
          <Heading as="h1">Newsletter de Josglobal Sarl</Heading> {/* Newsletter title */}
          <Text>Cher Abonné,</Text> {/* Dear Subscriber */}
          <Text>Voici les dernières nouvelles de Josglobal Sarl :</Text> {/* Latest news message */}

          <Section className="content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Section>

          <Text className="footer">
            Merci de vous être abonné à notre newsletter. Si vous souhaitez vous désinscrire, veuillez cliquer ici. {/* Unsubscribe message */}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsletterTemplate;
