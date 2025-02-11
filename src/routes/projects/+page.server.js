import { projects } from './data.js';

export function load() {
    console.log(projects)
	return {
		summaries: projects.map((project) => ({
			isContent: project.content != "" ? true : false,
            slug: project.content != "" ? project.slug : "#",
			title: project.title,
			thumb: project.thumb,
            location: project.location,
            years: project.years,
			tags: project.tags,
            classes: project.tags.join(" "),
            summary: project.summary,
		}))
	};
}