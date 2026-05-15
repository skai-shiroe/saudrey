import { Column, Heading, Meta, Schema, Text, RevealFx, Grid } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { projects } from "@/data";
import { ProjectCard } from "@/components/ProjectCard";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="l" paddingTop="80" paddingX="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="xl" horizontal="center" align="center" maxWidth="m" paddingBottom="40">
        <Heading as="h1" variant="display-strong-l" align="center" wrap="balance">
          {work.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Each project is a concrete response to a business problem — from analysis to deployed solution.
        </Text>
      </Column>
      <Grid columns="2" s={{ columns: 1 }} gap="l">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </Column>
  );
}