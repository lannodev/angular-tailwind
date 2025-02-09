@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap') layer(base);

@import 'tailwindcss';


/** Plugins **/
@import './assets/styles/apexchart.css';

@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/aspect-ratio";
@plugin "tailwind-scrollbar";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-*: initial;
  --font-poppins: Poppins, system-ui, sans-serif;
  --font-nunito: Nunito Sans, sans-serif;

  --animate-wiggle: wiggle 1s ease-in-out infinite;
  --animate-fade-in-down: fade-in-down 0.3s ease-out;
  --animate-fade-out-down: fade-out-down 0.3s ease-out;
  --animate-fade-in-up: fade-in-up 0.3s ease-out;
  --animate-fade-out-up: fade-out-up 0.3s ease-out;

  --shadow-custom: 0px 0px 50px 0px rgb(82 63 105 / 15%);

  --color-border: var(--border);
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  @keyframes wiggle {

    0%,
    100% {
      transform: rotate(-3deg);
    }

    50% {
      transform: rotate(3deg);
    }
  }

  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-out-down {
    from {
      opacity: 1;
      transform: translateY(0px);
    }

    to {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-out-up {
    from {
      opacity: 1;
      transform: translateY(0px);
    }

    to {
      opacity: 0;
      transform: translateY(10px);
    }
  }
}

@utility container {
  padding-inline: 1rem;

  @media (width >=theme(--breakpoint-sm)) {
    padding-inline: 2rem;
  }

  @media (width >=theme(--breakpoint-lg)) {
    padding-inline: 4rem;
  }

  @media (width >=theme(--breakpoint-xl)) {
    padding-inline: 5rem;
  }

  @media (width >=theme(--breakpoint-2xl)) {
    padding-inline: 6rem;
  }
}

/*
  The default border color has changed to `currentColor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

@utility dropdown-content {
  @apply pointer-events-none scale-95 opacity-0 duration-100 ease-in;

  .dropdown:hover>& {
    @apply pointer-events-auto block scale-100 animate-fade-in-up opacity-100 duration-200;
  }
}

@utility dropdown {
  &:hover>.dropdown-content {
    @apply pointer-events-auto block scale-100 animate-fade-in-up opacity-100 duration-200;
  }
}

@layer base {
  :root {
    --background: #FFFFFF;
    --foreground: #0C1420;
    --card: #F1F5F9;
    --card-foreground: #000000;
    --primary: #E11D48;
    --primary-foreground: #FFFFFF;
    --muted: #CFD9E5;
    --muted-foreground: #64748B;
    --destructive: #CC0033;
    --destructive-foreground: #FAFAFA;
    --border: #E2E8F0;
  }

  .dark {
    --background: #0A0A0A;
    --foreground: #F2F2F2;
    --card: #121212;
    --card-foreground: #262626;
    --muted: #262626;
    --muted-foreground: #A3A3A3;
    --border: #262626;
  }

  :root[data-theme='violet'] {
    --primary: #6E56CF;
  }

  .dark[data-theme='violet'] {
    --background: #060815;
    --foreground: #F6F8FB;
    --card: #0B0F1A;
    --card-foreground: #F6F8FB;
    --primary-foreground: #F6F8FB;
    --muted: #232B3D;
    --muted-foreground: #A1A8BF;
    --border: #232B3D;
  }

  :root[data-theme='red'] {
    --primary: #CC0033;
  }

  .dark[data-theme='red'] {
    --primary-foreground: #FFE5E5;
  }

  :root[data-theme='blue'] {
    --primary: #2490FF;
  }

  .dark[data-theme='blue'] {
    --background: #02080F;
    --foreground: #F8FAFC;
    --card: #0B1117;
    --card-foreground: #F8FAFC;
    --primary-foreground: #0F1729;
    --muted: #1E293B;
    --muted-foreground: #94A3B8;
    --border: #1E293B;
  }

  :root[data-theme='orange'] {
    --primary: #EA580C;
  }

  .dark[data-theme='orange'] {
    --background: #0C0A09;
    --foreground: #FAFAF9;
    --card: #141110;
    --card-foreground: #FAFAF9;
    --primary-foreground: #FAFAF9;
    --muted: #292524;
    --muted-foreground: #A8A29E;
    --border: #292524;
  }

  :root[data-theme='yellow'] {
    --primary: #FACC15;
  }

  .dark[data-theme='yellow'] {
    --background: #0C0A09;
    --foreground: #FAFAF9;
    --card: #141110;
    --card-foreground: #FAFAF9;
    --primary: #FACC15;
    --primary-foreground: #422006;
    --muted: #292524;
    --muted-foreground: #A8A29E;
    --border: #292524;
  }

  :root[data-theme='green'] {
    --primary: #22C55E;
  }

  .dark[data-theme='green'] {
    --primary: #22C55E;
    --primary-foreground: #052E16;
  }

}

/** Scroll bar **/
@supports selector(::-webkit-scrollbar) {
  .supports-scrollbars\: pr-2 {
    padding-right: 0.5rem;
  }
}

/** Custom Forms **/
[type='text'],
[type='email'],
[type='url'],
[type='password'],
[type='number'],
[type='date'],
[type='datetime-local'],
[type='month'],
[type='search'],
[type='tel'],
[type='time'],
[type='week'],
[multiple],
textarea,
select {
  @apply w-full rounded-md border border-border bg-background text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-hidden focus:ring-primary;
}

[type='checkbox'],
[type='radio'] {
  @apply h-4 w-4 rounded-sm border-border bg-background checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus:ring-2 focus:ring-primary;
}