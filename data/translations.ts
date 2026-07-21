import type { Language } from '@/context/LanguageContext';

export const translations: Record<
  Language,
  {
    nav: {
      toggleAriaLabel: string;
      products: string;
      about: string;
      contact: string;
    };
    about: {
      title: string;
      lead: string;
      paragraphs: string[];
      closing: string;
    };
    forWhom: {
      title: string;
      paragraphs: string[];
    };
    products: {
      title: string;
      tagline: string;
      subtitle: string;
      note: string;
    };
    contact: {
      title: string;
      intro: string;
      body: string;
      emailLabel: string;
      phoneLabel: string;
      form: {
        subject: string;
        email: string;
        message: string;
        submit: string;
        subjectPrefix: string;
      };
    };
  }
> = {
  sr: {
    nav: {
      toggleAriaLabel: 'Promeni jezik',
      products: 'Proizvodi',
      about: 'O nama',
      contact: 'Kontakt',
    },
    about: {
      title: 'Šta je Buns.',
      lead: 'Dobar burger počinje sa dobrom zemičkom.',
      paragraphs: [
        'Upravo zato smo posvetili godine razvoju proizvoda koji ispunjava najviše standarde, kako profesionalnih kuhinja, tako i svih koji veruju da svaki detalj pravi razliku.',
        'Naša receptura nastala je kombinovanjem različitih pekarskih tehnika, sa jednim ciljem – da napravimo bun koji je istovremeno izuzetno mekan i vazdušast, a dovoljno čvrst da zadrži svoju strukturu čak i uz najsočnije burgere.',
        'Naš bun je hibridna verzija potato bun-a, mlečnog hleba i brioche-a. Osnova mu je potato bun, kome smo dodali najbolje osobine mlečnog hleba i brioche-a kako bismo dobili savršeno izbalansiran proizvod. Pravimo ga svežeg svakog dana, od najkvalitetnijeg putera, pa je blago puterast i prijatno sladak, ali nikada toliko intenzivan da preuzme ukus burgera. Njegov zadatak nije da bude glavni, već da istakne ono što se nalazi između njega.',
      ],
      closing: 'Jer dobar burger počinje i završava se sa dobrom zemičkom.',
    },
    forWhom: {
      title: 'Za koga je Buns.',
      paragraphs: [
        'Naši bunsi namenjeni su svima koji veruju da dobar burger zaslužuje jednako dobru zemičku.',
        'Od profesionalnih kuhinja, burger restorana i food truck-ova, do hotela, keteringa i korporativnih događaja. Jednako su dobar izbor i za privatne proslave, roštilje sa prijateljima ili porodična okupljanja.',
        'Bez obzira na to da li pripremate deset ili hiljadu burgera, naš bun pruža isti kvalitet, istu teksturu i istu pouzdanost u svakom zalogaju.',
      ],
    },
    products: {
      title: 'Proizvodi',
      tagline: 'više od zemičke',
      subtitle: 'Premium peciva za burger & sendvič majstore.',
      note: '*Svaki od proizvoda je moguće personalizovati po želji kupca posipom i/ili utisnutim žigom (logom).',
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Ukoliko želite da poručite naše proizvode, imate dodatna pitanja ili biste želeli da isprobate naše buns pre poručivanja, biće nam zadovoljstvo da vam obezbedimo uzorke.',
      body: 'Kontaktirajte nas putem e-maila ili telefona, a mi ćemo vam odgovoriti u najkraćem mogućem roku.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      form: {
        subject: 'Naslov',
        email: 'E-mail',
        message: 'Poruka',
        submit: 'Pošalji poruku',
        subjectPrefix: 'Upit sa sajta od',
      },
    },
  },
  en: {
    nav: {
      toggleAriaLabel: 'Toggle language',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    about: {
      title: 'What is Buns.',
      lead: 'A good burger starts with a good bun.',
      paragraphs: [
        "That's exactly why we've spent years developing a product that meets the highest standards — for professional kitchens and for everyone who believes that every detail makes a difference.",
        'Our recipe was born by combining different baking techniques, with one goal – to create a bun that is at once exceptionally soft and airy, yet firm enough to hold its structure even with the juiciest of burgers.',
        "Our bun is a hybrid of a potato bun, milk bread and brioche. Its base is a potato bun, to which we've added the best qualities of milk bread and brioche to achieve a perfectly balanced product. We make it fresh every day, from the finest butter, so it's mildly buttery and pleasantly sweet, but never so intense that it overtakes the taste of the burger. Its job isn't to be the star, but to elevate what sits between it.",
      ],
      closing: 'Because a good burger begins and ends with a good bun.',
    },
    forWhom: {
      title: 'Who is Buns for.',
      paragraphs: [
        'Our buns are made for everyone who believes a good burger deserves an equally good bun.',
        "From professional kitchens, burger restaurants and food trucks, to hotels, catering and corporate events. They're just as great a choice for private celebrations, get-togethers with friends or family gatherings.",
        "Whether you're preparing ten burgers or a thousand, our bun delivers the same quality, the same texture and the same reliability in every bite.",
      ],
    },
    products: {
      title: 'Products',
      tagline: 'beyond the bun',
      subtitle: 'Premium buns for burger & sandwich craftsmen.',
      note: "*Every product can be personalized to the customer's wishes with toppings and/or an embossed stamp (logo).",
    },
    contact: {
      title: 'Contact',
      intro:
        "If you'd like to order our products, have additional questions, or would like to try our buns before ordering, we'd be happy to provide you with samples.",
      body: "Contact us by email or phone, and we'll get back to you as soon as possible.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      form: {
        subject: 'Subject',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        subjectPrefix: 'Website inquiry from',
      },
    },
  },
};
