import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamMember from '@/components/team/TeamMember';

const Team = () => {
  const coreTeam = [
    {
      name: "Shaik Sameer Pasha",
      title: "Founder & Chief Executive Officer",
      description: "Hardware Developer — CAD Developer",
      imageSrc: "https://media-hosting.imagekit.io/733720f1c9394d99/Shaik%20Sameer%20Pasha%20Hardware%20Developer%20CAD%20developer%203rd%20Year%20SRMIST.png?Expires=1837955821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cg75quE1NH2hotFZG3yWkLg3mt1YUKISqki6BtjWI8iy1Oja7LiDBJtPBV~y7rpcTsl2gkqIDz5mH38lFjCwgiOzRTcmpmxFp0PgCV1oo~lVBhmH3xY~ZKbN6nKIVf9NEqk9FBLi9hXq2Fi-cX7ENxQbaMa88MmZ6YTS47RB57BAPjOdZ9tF6VR3lxUPnbJWSBB4wDlOgUFM8aI4fDvQbMcUKACJIioBMIYuuAtGLoTCIpytI07mqQuZlkkWucZIZkZIhOtvJ57LIU0FEezsgt4l6NqVcbESSAccjOlwScr~pSYtNyWFRQDqgYSWEUOt~x-IdQLZN9ohKyFEpfHZ8w__",
      linkedin: "https://www.linkedin.com/",
      email: "bharatdronetech@gmail.com"
    },
    {
      name: "Saurajyoti Bhattacharjee",
      title: "Founder & Chief Operational Officer",
      description: "Software Developer — AI-ML Expert",
      imageSrc: "https://media-hosting.imagekit.io/f1d6b196a18445ef/saura.png?Expires=1837955435&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2xAToyfu09OA-KK23X08Df2CZ6XyH7IKTGVT359gN3WNWlixjB7bV-6KtZBExN0ECNA1ejOgXQcu9fXLJp-kCNecmn~rXPNvobhFTnCqBwYmwSGO~Cbh5~4q~J3RR26Z1YvNOVGDEaWkP7ekFsHrNHsT~kO-fSDq9IkIX~E9BfLvi-Wa2HR3iYcuPFqhIFNqgHfRGEtVhQ7Ndqar2NPtmXfB9eyjTvObRwny2gSoA-THw8RRhpUOuNr1G5o5LezwEZTZnnYGHg-uGHEuPxe8rcHfP0yjI~qtk3wKF8RdMAFbBiOCkjPkFyym8TJr7tfGscslSa9Ojosz6ejJLYP8xA__",
      linkedin: "https://www.linkedin.com/",
      email: "bharatdronetech@gmail.com"
    }
  ];

  const projectManagers = [
    {
      name: "Dr. C. Muralidharan",
      title: "Design Expert and Patent Drafter",
      description: "Project Manager I — Faculty at SRMIST University",
      imageSrc: "https://media-hosting.imagekit.io/bb3f6342bf1e403a/Dr.C.Muralidharan%20Assistant%20Professor%20SRMIST.png?Expires=1837955821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=O8gLJ2T54CU58U3rLOfS5eBx-yl6IrGTnAgM3lYR0xgVUAtEFFq9S0HLWM2cvZZ3UVX31RcbJBcJhCWDunrmz8ufMf6pjzcP5uVsPKpoMcbVnfv81OXqD96eSZwIs71g7Om16A4RdGQSzR8TmIX2KpeN-SsNSbF2kOwiMdbWSTZ~rKlX8nbjKjE3YzrsL5nNANePsjR-YreV8vDpmeayUFX86n2f8TayRsyaf9QrawqABfGOmAYLb2FUhg1VBixOqaUexM9bz2lgMDzzJGlL8dRNxYkFgiOMArJjRzmlH4NiCtnWyk3~v7A1xqY1wxDpuSvyaGjMrKNsW7zI9X0PTQ__",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "R.V. Arulalan",
      title: "IoT-Enabled Product Development",
      description: "Project Manager II — Faculty at SRMIST University",
      imageSrc: "https://media-hosting.imagekit.io/54d07472590f4ed8/DR.V.%20Arulalan%20Assistant%20Professor%20SRMIST.png?Expires=1837955821&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yMITW-2nJ6-Kp7UlngtcG4WLuy3xjUU7QGo9tPVPA-n5C0B-L5hpP2wzsoINshU0eP2osFDP-OrBM0p1zeLh70jXw-bYTrW2k61lyL9Iyf4sCuKpjDyuCCZCduN0GrBOm~bV7cjFy0-uRf-4ZfeiDdKwTr4-CkkXILYDl0RzWLmJTq1OdXk2p2~ilbIdEWBk3K9qmjoA31VElytiwpPHgBXOB4qB7UVFTjS8prBX5VXawGBf0h0D~tIyHNnYU4GD3XXAAVdcrwcrQpkuDRcxxcPPng8p1yG7aX6IVdCMvCcW74oTOIG06rRBzssjSGGGDBhKeuzi5lTYLXjdVp1vqw__",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  const executiveSupport = [
    {
      name: "Mr. Abishek Sinha",
      title: "Business Mentor",
      description: "Co-founder CEO, Eko India Financial Services",
      imageSrc: "https://placeholder.pics/svg/300x300/DEDEDE/555555/Abishek%20Sinha",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Mr. Mahesh Kumar Hota",
      title: "Aviation Expert",
      description: "EX-MROServices Supervisor and ITOps in Military Aviation, Indian Air Force (IAF)",
      imageSrc: "https://placeholder.pics/svg/300x300/DEDEDE/555555/Mahesh%20Hota",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  const developers = [
    {
      name: "Yash Jha",
      title: "Developer",
      description: "Specializes in drone control systems and firmware development",
      imageSrc: "https://placeholder.pics/svg/300x300/DEDEDE/555555/Yash%20Jha",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  return (
    <Layout>
      <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading 
            title="Our Team"
            subtitle="Meet the experts behind Bharat Heavy Drones' innovative solutions"
          />
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-bhd-600 pl-4">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-bhd-600 pl-4">Project Managers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectManagers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-bhd-600 pl-4">Executive Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveSupport.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-bhd-600 pl-4">Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-bhd-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about drone technology and innovation. If you're interested in joining our team, please contact us.
          </p>
          <a 
            href="mailto:bharatdronetech@gmail.com" 
            className="inline-flex items-center justify-center bg-white text-bhd-600 hover:bg-gray-100 rounded-md px-6 py-3 font-medium transition-colors duration-200"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
