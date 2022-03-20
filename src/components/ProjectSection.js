import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Title from "./Title"
import { useStaticQuery, graphql, Link } from "gatsby"
import ButtonAll from "./Button"
import { AiFillGithub, AiFillEye } from "react-icons/ai"

export default function ProjectSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject(
        limit: 4
        sort: { fields: image___createdAt, order: DESC }
      ) {
        nodes {
          categories
          gitlink
          title
          slug
          url
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          desc
        }
      }
    }
  `)
  const projects = data.allDatoCmsProject.nodes
  const [projectsLength] = useState(projects.length)

  return (
    <div id="Project" className="mx-auto max-w-screen-lg mt-20">
      <Title>
        I have{" "}
        <Link
          className="text-red-700 border-red-700 border-b-4 pb-1"
          to="/Projects"
        >
          Projects
        </Link>{" "}
      </Title>
      <div className="space-y-3 mt-10">
        {projects.map((project, i) => {
          const git = Object.values(JSON.parse(project.gitlink))
          const Url = Object.values(JSON.parse(project.url))

          return (
            <Project
              {...project}
              key={i}
              git={git}
              Url={Url}
              i={i}
              projectsLength={projectsLength}
            />
          )
        })}
      </div>
      <div className="text-center my-16">
        <ButtonAll title="all project" to="/Projects" />
      </div>
    </div>
  )
}

export const Project = ({
  categories,
  title,
  desc,
  Url,
  git,
  image,
  i,
  projectsLength,
}) => {
  const Image = getImage(image)
  const Categories = Object.values(JSON.parse(categories))

  const borderProject = () => {
    if (i === projectsLength - 1) {
      return "flex flex-col lg:flex-row lg:items-center lg:justify-start border-b-0"
    } else {
      return "flex flex-col lg:flex-row lg:items-center lg:justify-start lg:border-b-0 border-b-2 border-gray-200 pb-3 "
    }
  }

  return (
    <div className={borderProject()}>
      <a
        className="w-full h-80 lg:w-64 md:h-52"
        href={Url}
        target="_blank"
        rel="noreferrer"
      >
        <GatsbyImage
          image={Image}
          className="w-full h-full rounded-md"
          alt={title}
        />
      </a>
      <div className="space-y-2 lg:ml-10 max-w-2xl">
        <h4 className="text-red-600 text-3xl font-bold cursor-pointer italic mt-2  lg:mt-0">
          {title}
        </h4>
        <p className="text-gray-700">{desc}</p>
        <ul className="flex text-white space-x-3">
          {Categories.map((item, i) => (
            <li key={i} className="bg-red-500 capitalize p-1 rounded-md">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex space-x-3">
          <a
            href={Url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-900 flex items-center text-lg"
          >
            <AiFillEye className="mr-1" /> Web
          </a>
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-900 flex items-center text-lg"
          >
            <AiFillGithub className="mr-1" /> GitHub code
          </a>
        </div>
      </div>
    </div>
  )
}
