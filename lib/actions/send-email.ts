'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({
  subject,
  email,
  message,
}: ContactFormData) => {
  try {
    const { error } = await resend.emails.send({
      from: `Buns.rs <info@buns.rs>`,
      to: ['info@buns.rs'],
      subject,
      text: message,
      replyTo: email,
    });

    if (error) {
      console.error('sendEmail: Resend returned an error', error);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error('sendEmail: unexpected error', err);
    return { success: false };
  }
};
