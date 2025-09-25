import { ReactNode } from "react";

interface CitationProps {
  id: string;
  children?: ReactNode;
  className?: string;
}

interface ReferenceProps {
  id: string;
  authors: string;
  title: string;
  journal?: string;
  year: string;
  url?: string;
  doi?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
}

interface ReferenceListProps {
  references: ReferenceProps[];
  title?: string;
}

// Inline citation component
export function Citation({ id, children, className = "" }: CitationProps) {
  return (
    <sup className={`citation ${className}`}>
      <a
        href={`#ref-${id}`}
        className="text-blue-600 no-underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        aria-label={`Citation ${id}`}
      >
        [{children || id}]
      </a>
    </sup>
  );
}

// Individual reference component
export function Reference({
  id,
  authors,
  title,
  journal,
  year,
  url,
  doi,
  volume,
  issue,
  pages,
  publisher,
}: ReferenceProps) {
  return (
    <div id={`ref-${id}`} className="mb-4 text-sm leading-relaxed">
      <span className="font-medium text-blue-600 dark:text-blue-400">[{id}]</span>{" "}
      <span className="font-medium">{authors}</span> ({year}).
      <span className="italic"> {title}</span>
      {journal && (
        <span>
          . <em>{journal}</em>
        </span>
      )}
      {volume && <span>, {volume}</span>}
      {issue && <span>({issue})</span>}
      {pages && <span>, {pages}</span>}
      {publisher && <span>. {publisher}</span>}
      {doi && (
        <span>
          . DOI:
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {doi}
          </a>
        </span>
      )}
      {url && !doi && (
        <span>
          .
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Available at: {url}
          </a>
        </span>
      )}
    </div>
  );
}

// Reference list component
export function ReferenceList({ references, title = "References" }: ReferenceListProps) {
  return (
    <div className="not-prose mt-8 border-t pt-6">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      <div className="space-y-3">
        {references.map((ref) => (
          <Reference key={ref.id} {...ref} />
        ))}
      </div>
    </div>
  );
}
