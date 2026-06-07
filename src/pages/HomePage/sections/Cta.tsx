// Created by add_section_from_catalog (ContactCta).

import React from 'react';
import ContactCta from '@/components/sections/contact/ContactCta';

export default function CtaSection(): React.JSX.Element {
  return (
    <div data-webild-section="cta" id="cta">
      <ContactCta
        primaryButton={{"href":"#contact","text":"Contact Us"}}
        secondaryButton={{"href":"#products","text":"View Menu"}}
        text="Let us bring artisan freshness to your next event or daily routine."
        tag="Ready to Order?"
      />
    </div>
  );
}
