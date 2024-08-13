import * as React from 'react';
import BaseEmailTemplate from './base';

interface NewLeadTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<NewLeadTemplateProps>> = ({
  email,
}) => (
  <BaseEmailTemplate
    title="New Lead Signed up!"
    content={
      <p className="text-muted-foreground">
        A new lead has signed up with the email: {email}
      </p>
    }
  />
);
