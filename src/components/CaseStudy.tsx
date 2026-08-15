"use client";

import { type ReactNode, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { caseStudiesData, type CaseStudyItem } from "@/data/caseStudies";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";
import { scrollToElement } from "@/lib/utils";

function hasProofImage(path: string): boolean {
  return Boolean(path && path.startsWith("/") && !path.includes("placeholder"));
}

function N8nWorkflowBlock({ onOpenLightbox }: { onOpenLightbox: () => void }) {
  const imageSrc = siteConfig.n8nWorkflowImage;
  const showImage = hasProofImage(imageSrc);

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-graphite-200 bg-white shadow-lg shadow-graphite-900/5">
        <div className="flex items-center justify-between border-b border-graphite-100 bg-graphite-50/80 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-graphite-300" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite-300" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-graphite-300" aria-hidden="true" />
            <span className="ml-2 text-xs text-graphite-400">n8n workflow</span>
          </div>
          {showImage && (
            <span className="text-xs font-medium text-graphite-600">
              {caseStudiesData.n8n.label}
            </span>
          )}
        </div>

        {showImage ? (
          <button
            type="button"
            onClick={onOpenLightbox}
            className="group relative block w-full cursor-pointer overflow-hidden text-left"
            aria-label={`${caseStudiesData.n8n.label}. ${caseStudiesData.n8n.zoomLabel}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-graphite-50">
              <Image
                src={imageSrc}
                alt="Скриншот рабочего workflow n8n"
                fill
                className="object-cover object-[center_42%] transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 640px"
                priority
              />
              <div className="absolute inset-0 bg-graphite-950/0 transition-colors duration-300 group-hover:bg-graphite-950/5" />
              <div className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium text-graphite-600 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                Нажмите для увеличения
              </div>
            </div>
          </button>
        ) : (
          <div className="relative aspect-[16/10] bg-gradient-to-br from-graphite-50 via-white to-accent-50/30" />
        )}
      </div>

      {showImage && (
        <button
          type="button"
          onClick={onOpenLightbox}
          className="mt-2 text-xs font-medium text-accent-600 transition-colors hover:text-accent-700"
        >
          {caseStudiesData.n8n.zoomLabel} →
        </button>
      )}

      <div className="mt-4">
        <p className="text-sm leading-relaxed text-graphite-700">
          {caseStudiesData.n8n.caption}
        </p>
      </div>
    </div>
  );
}

function ProofCard({
  title,
  text,
  children,
  className = "",
}: {
  title: string;
  text: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-graphite-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
    >
      <div className="mb-3 flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-graphite-950">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-graphite-600">{text}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function AvatarPreview() {
  const thumbnailUrl = getYouTubeThumbnailUrl(siteConfig.youtubeDemoUrl);

  return (
    <button
      type="button"
      onClick={() => scrollToElement("video-demo")}
      className="group mt-3 flex w-full items-center gap-3 rounded-lg border border-graphite-100 bg-graphite-50/50 p-2 text-left transition-colors hover:border-accent-200 hover:bg-accent-50/30"
      aria-label="Посмотреть пример AI-видео"
    >
      <div className="relative h-16 w-10 shrink-0 overflow-hidden rounded-md bg-graphite-200">
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnailUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-graphite-300" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-graphite-950/20">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-accent-600">
            <svg className="ml-0.5 h-2.5 w-2.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-accent-600 group-hover:text-accent-700">
        Смотреть пример ролика →
      </span>
    </button>
  );
}

function WorkflowIcon() {
  return (
    <div className="mt-3 flex items-center gap-2 rounded-lg border border-graphite-100 bg-graphite-50/50 px-3 py-2.5">
      <svg
        className="h-5 w-5 shrink-0 text-accent-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span className="text-xs text-graphite-500">Автоматизированная цепочка этапов</span>
    </div>
  );
}

function PublicationStatus({ imageSrc }: { imageSrc?: string }) {
  const showImage = imageSrc && hasProofImage(imageSrc);

  return (
    <div className="mt-3 space-y-2">
      {showImage && (
        <div className="relative h-20 overflow-hidden rounded-lg border border-graphite-100">
          <Image
            src={imageSrc}
            alt="Подтверждение публикации контента"
            fill
            className="object-cover object-top"
          />
        </div>
      )}
      <p className="flex items-center gap-2 text-xs font-medium text-graphite-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        {caseStudiesData.proofs.publication.status}
      </p>
    </div>
  );
}

function CertificateBlock({ onOpenLightbox }: { onOpenLightbox: () => void }) {
  const imageSrc = siteConfig.certificateImage;
  if (!hasProofImage(imageSrc)) return null;

  const { certificate } = caseStudiesData;

  return (
    <div className="mt-10 rounded-xl border border-graphite-100 bg-white p-5 md:mt-12 md:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-graphite-950">{certificate.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-graphite-600">{certificate.text}</p>
          <button
            type="button"
            onClick={onOpenLightbox}
            className="mt-3 text-xs font-medium text-accent-600 transition-colors hover:text-accent-700"
          >
            {certificate.zoomLabel} →
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenLightbox}
          className="group relative mx-auto w-full max-w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 border-accent-200/80 shadow-md transition-all duration-300 hover:border-accent-300 hover:shadow-lg sm:mx-0"
          aria-label={`${certificate.alt}. ${certificate.zoomLabel}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-graphite-50">
            <Image
              src={imageSrc}
              alt={certificate.alt}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="260px"
            />
            <div className="absolute inset-0 bg-graphite-950/0 transition-colors duration-300 group-hover:bg-graphite-950/5" />
          </div>
        </button>
      </div>
    </div>
  );
}

function PublishedCases({ cases }: { cases: CaseStudyItem[] }) {
  const published = cases.filter((c) => c.published);
  if (published.length === 0) return null;

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {published.map((caseItem) => (
        <div
          key={caseItem.id}
          className="rounded-xl border border-graphite-100 bg-white p-6 shadow-sm"
        >
          {caseItem.image && (
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-graphite-100">
              <Image src={caseItem.image} alt={caseItem.title} fill className="object-cover" />
            </div>
          )}
          <h3 className="mb-2 text-lg font-semibold text-graphite-950">{caseItem.title}</h3>
          <p className="text-sm leading-relaxed text-graphite-600">{caseItem.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudy() {
  const { proofs, workflowSteps } = caseStudiesData;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const openN8nLightbox = () => {
    if (hasProofImage(siteConfig.n8nWorkflowImage)) {
      setLightbox({
        src: siteConfig.n8nWorkflowImage,
        alt: "Скриншот рабочего workflow n8n",
      });
    }
  };

  const openCertificateLightbox = () => {
    if (hasProofImage(siteConfig.certificateImage)) {
      setLightbox({
        src: siteConfig.certificateImage,
        alt: caseStudiesData.certificate.alt,
      });
    }
  };

  return (
    <Section id="case-study">
      <SectionHeader
        title={caseStudiesData.title}
        subtitle={caseStudiesData.subtitle}
        centered={false}
      />

      <p className="-mt-6 mb-10 text-sm font-medium uppercase tracking-wide text-accent-600 md:mb-12">
        {caseStudiesData.accent}
      </p>

      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <N8nWorkflowBlock onOpenLightbox={openN8nLightbox} />

        <div className="flex flex-col gap-4">
          <ProofCard title={proofs.avatar.title} text={proofs.avatar.text}>
            <AvatarPreview />
          </ProofCard>

          <ProofCard title={proofs.workflow.title} text={proofs.workflow.text}>
            <WorkflowIcon />
          </ProofCard>

          <ProofCard title={proofs.publication.title} text={proofs.publication.text}>
            <PublicationStatus imageSrc={siteConfig.publicationProofImage} />
          </ProofCard>
        </div>
      </div>

      <p className="mt-10 max-w-3xl text-base leading-relaxed text-graphite-600 md:mt-12">
        {caseStudiesData.humanNote}
      </p>

      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {workflowSteps.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="font-medium text-graphite-700">{step}</span>
              {index < workflowSteps.length - 1 && (
                <span className="text-graphite-300" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="mt-2 text-sm text-graphite-500">{caseStudiesData.workflowNote}</p>
      </div>

      <CertificateBlock onOpenLightbox={openCertificateLightbox} />

      <div className="mt-10 rounded-2xl border border-graphite-100 bg-graphite-50/50 p-6 md:mt-12 md:p-8">
        <p className="mb-4 text-lg font-medium text-graphite-900">
          {caseStudiesData.cta.title}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Button size="lg" onClick={() => scrollToElement("lead-form")}>
            {caseStudiesData.cta.primary}
          </Button>
          <button
            type="button"
            onClick={() => scrollToElement("video-demo")}
            className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
          >
            {caseStudiesData.cta.secondary} →
          </button>
        </div>
      </div>

      <PublishedCases cases={caseStudiesData.cases} />

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          isOpen={Boolean(lightbox)}
          onClose={() => setLightbox(null)}
        />
      )}
    </Section>
  );
}
