"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { projects } from "@/data/projects";

interface ProjectsFilterContextType {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  clearTags: () => void;
  filteredProjects: typeof projects;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: { label: string; value: string; count: number }[];
  totalProjects: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const ProjectsFilterContext = createContext<
  ProjectsFilterContextType | undefined
>(undefined);

const PROJECTS_PER_PAGE = 6;

export function ProjectsFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearTags = () => {
    setSelectedTags([]);
    setCurrentPage(1); // Reset to first page when filters are cleared
  };

  const filteredProjects = useMemo(
    () =>
      projects
        .filter((project) =>
          searchQuery
            ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              project.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            : true
        )
        .filter((project) =>
          selectedTags.length
            ? selectedTags.every((tag) => project.tags.includes(tag))
            : true
        )
        .filter((project) =>
          activeFilter === "featured" ? project.featured : true
        ),
    [searchQuery, selectedTags, activeFilter]
  );

  const filters = useMemo(
    () => [
      {
        label: "All Projects",
        value: "",
        count: projects.length,
      },
      {
        label: "Featured",
        value: "featured",
        count: projects.filter((p) => p.featured).length,
      },
    ],
    []
  );

  const totalProjects = projects.length;
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset to first page when search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Reset to first page when active filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <ProjectsFilterContext.Provider
      value={{
        selectedTags,
        toggleTag,
        clearTags,
        filteredProjects,
        activeFilter,
        setActiveFilter,
        searchQuery,
        setSearchQuery,
        filters,
        totalProjects,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange,
      }}
    >
      {children}
    </ProjectsFilterContext.Provider>
  );
}

export function useProjectsFilter() {
  const context = useContext(ProjectsFilterContext);
  if (context === undefined) {
    throw new Error(
      "useProjectsFilter must be used within a ProjectsFilterProvider"
    );
  }
  return context;
}
