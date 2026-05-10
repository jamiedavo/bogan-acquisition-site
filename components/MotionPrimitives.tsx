"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.22,
};

type BaseMotionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  distance?: number;
};

type MotionLinkProps = BaseMotionProps & {
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

function revealVariants(distance: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function transition(delay = 0) {
  return {
    duration: 0.72,
    ease: premiumEase,
    delay,
  };
}

export function MotionSection({
  children,
  className,
  id,
  delay = 0,
  distance = 26,
}: BaseMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={revealVariants(distance)}
      transition={transition(delay)}
    >
      {children}
    </motion.section>
  );
}

export function HeroMotion({
  children,
  className,
  id,
  delay = 0,
}: BaseMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
}: BaseMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: BaseMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={transition()}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className }: BaseMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <motion.article
      className={className}
      variants={itemVariants}
      transition={transition()}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.22,
          ease: premiumEase,
        },
      }}
      whileTap={{
        scale: 0.995,
      }}
    >
      {children}
    </motion.article>
  );
}

export function MotionLink({
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
}: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.18,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.a>
  );
}

export function AnimatedGlow({ className }: { className: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div aria-hidden="true" className={className} />;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      initial={{
        opacity: 0.55,
        scale: 1,
      }}
      animate={{
        x: [0, 14, 0],
        y: [0, -10, 0],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}