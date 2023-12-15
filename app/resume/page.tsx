import { Navigation } from "../components/nav";

export default function Resume() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Resume - Tae Yeong Kim
          </h2>
          <p className="mt-4 text-zinc-400">
            Junior Devops Engineer | Student at the University of Melbourne
          </p>
          <p className="mt-2 text-zinc-400">
            Bachelor of Commerce (Finance) & Diploma in Computing
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-4">
            Experience
          </h3>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-zinc-100">
              DevOps Engineer Intern
            </h4>
            <p className="mt-2 text-zinc-600 font-bold">
              National Australia Bank, Feb 2022 - June 2023
            </p>
            <ul className="mt-2 text-zinc-400 list-disc list-inside">
              <li>
                Successfully built, deployed and maintained CI/CD pipelines
                through a custom Jenkins environment deployed in AWS EC2,
                significantly reducing the time taken for developers to test and
                deploy code.
              </li>
              <li>
                Built a custom job using Ansible and AWS Cloudformation to
                provision a virtual IBM DataPower appliance in AWS ECS using a
                custom Docker container based on RHEL, allowing developers to
                test code in a realistic environment without touching production
                environments.
              </li>
              <li>
                Assisted in day-to-day operations of Jenkins, including
                patching, maintenance, upgrades and fixes.
              </li>
              <li>
                Assisted in the migration of Enterprise Jenkins pipelines to our
                custom Jenkins.
              </li>
              <li>
                Cut deployment times from multiple hours to minutes, saving
                developers and the whole team time.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-zinc-100">
              Junior DevOps Engineer
            </h4>
            <p className="mt-2 text-zinc-600 font-bold">
              TransPerfect, July 2023- Present
            </p>
            <ul className="mt-2 text-zinc-400 list-disc list-inside">
              <li>
                Tasked with assisting the development and client-facing teams in
                understanding, deploying and maintaining infrastructure related
                to hosting SaaS applications primarily in AWS.
              </li>
              <li>
                Manage AWS infrastructure via Terraform and build Amazon Machine
                Images (AMI) via Packer & Ansible.
              </li>
              <li>
                Responsible for defining & managing Jenkins Pipelines, and
                managing our CI/CD pipeline using Git, Docker build, Jenkins,
                Nexus, Elastic Container Registry.
              </li>
              <li>
                Perform configuration management through Ansible playbooks and
                Terraform.
              </li>
              <li>
                Involved in process improvement through automation and the
                "Infrastructure as code" model, ensuring that the deployment of
                resources is repeatable and clearly defined.
              </li>
              <li>
                Responsible for scripting using Python & Bash, and building,
                deploying, & orchestrating containers with Docker.
              </li>
              <li>
                Conduct Apache / Nginx configuration and performance tuning, and
                configure and manage Amazon Linux 2 machines in both cloud and
                data-centre environment.
              </li>
              <li>
                Responsible for performing monitoring of production
                infrastructure, including managing scaling, certificates, and
                other routine maintenance.
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-4">
            Education
          </h3>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-zinc-100">
              Bachelor of Commerce (Finance)
            </h4>
            <p className="mt-2 text-zinc-400">
              University of Melbourne, Expected 2024
            </p>

            <h4 className="text-xl font-bold text-zinc-100 mt-4">
              Diploma of Computing
            </h4>
            <p className="mt-2 text-zinc-400">
              University of Melbourne, Expected 2024
            </p>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-4">
            Skills
          </h3>
          <div className="mt-4 text-zinc-400">
            <p>Front end: HTML, CSS, Javascript/Typescript, React</p>
            <p>Backend: SQL/Database Management, Java, C, C++</p>
            <p>
              Devops: Jenkins, AWS EC2, AWS ECS, AWS Cloudformation, Ansible
            </p>
            <p>General: Linux, Bash, Git, Python</p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
