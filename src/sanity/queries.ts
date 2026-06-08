export const homepageQuery = `*[_type == "homepage"][0]{
  methodTitle,
  methodSubtitle,
  methodTextLeft,
  methodTextRight,

  benefitsTitle,
  benefits[]{
    number,
    title,
    text
  },
  benefitsClosingText,


  practitionerTitle,
  practitionerIntro,
  practitionerParagraphs,
  certifications,

bookingTitle,
bookingText,
bookingEmail,
bookingButtonText
}`;
