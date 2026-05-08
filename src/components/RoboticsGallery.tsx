import React from 'react';
import { motion } from 'motion/react';
import { Camera, Calendar, MapPin } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  year: string;
  location: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
    {
    id: 'the-beginning',
    title: 'The Journey Begins: 2015 Australian National Championships (Programming Skills Award)',
    year: '2015',
    location: 'Forest Hill, Melbourne',
    image: "/assets/img/RoboticsGallery/2015ProgrammingExcellence.jpg",
    description: 'My first exposure to the Vex Robotics Program was in the 2015-2016 Nothing But Net Season, where myself and one of my friends tried out a program that a teacher was trialing at the school. Despite the program being targeted at Year 9-12 students, we were in Year7 and had no prior experience with robotics or programming. However, we were both passionate about technology and eager to learn, so we jumped in headfirst. We spent countless hours tinkering with the robot and learning how to program it using the Vex Robotics software. Our hard work paid off when we won the Programming Skills Award at the 2015 Australian National Championships, which was an incredible achievement for us as beginners and set me on the path to become a Software Engineer. This experience sparked my passion for robotics and set me on a path of continuous learning and growth in the field.'
  },
  {
    id: 'a-year-of-learning',
    title: 'A Year Of Learning: 2016 Competition Season',
    year: '2016',
    location: 'Sydenham, Melbourne',
    image: "/assets/img/RoboticsGallery/2016Starstruck.jpg",
    description: 'After having some success in our first competition season and winning the programming skills award, we were eager to build on our momentum. Unfortunately, the teacher who brought the program to our school moved on elsewhere and took the equipment with him, but we wanted to continue competing and learning more about robotics. After gathering support from dozens of students, finding a teacher who was interested in supporting it and petitioning the principal for funding, we had the green light to start a team and continue our journey in robotics. The 2016 season was a year of learning and growth, as we faced new challenges and worked hard to improve our skills. We competed in the Starstruck season, which introduced new game elements and required us to develop more advanced strategies. Although we didn\'t win any awards that year at nationals, we gained valuable experience and laid the groundwork for future success.'
  },
  {
    id: 'datta-vic',
    title: 'Robotics Education & Outreach: 2017 Competition Season',
    year: '2017',
    location: 'Melbourne, Melbourne',
    image: "/assets/img/RoboticsGallery/EarlyDaysProgramming.jpg",
    description: 'The 2017 season marked the beginning of our outreach efforts, with team members volunteering to teach programming workshops at local schools and community centers to increase participation in robotics. Our team acted as role models for the wider community and attended different workshops and conferences to promote STEM education and robotics.'
  },
  {
    id: 'first-nationals-win',
    title: 'The Start Of Something Great: 2018 Competition Season',
    year: '2018',
    location: 'Melbourne, Australia',
    image: "/assets/img/RoboticsGallery/2018Nationals.jpg",
    description: 'After beginning to network locally and internationally in the robotics community, we were able to rapidly improve our skills and knowledge. The 2018 season was a breakthrough year for us, as we won our first National Championship and Excellence Award in the V5RC Turning Point season. This was a huge milestone for our team and validated all of our hard work and dedication. It also motivated us to continue pushing ourselves to achieve even greater success in the future. Because of this success our team had the opportunity to represent Australia at the 2018-2019 World Championships.'
  },
  {
    id: 'first-worlds',
    title: 'On Top Of The World: 2018-2019 World Championship',
    year: '2019',
    location: 'Louisville, Kentucky, USA',
    image: "/assets/img/RoboticsGallery/placeholder.jpg",
    description: 'After winning our first National Championship, we had the incredible opportunity to represent Australia at the 2018-2019 VEX Robotics World Championships in Louisville, Kentucky. Competing against the best teams from around the world was an unforgettable experience that pushed us to new heights. We gained valuable insights into advanced robotics techniques and strategies, and we were inspired by the creativity and innovation of our fellow competitors and see how far off we were from the top. Although we didn\'t win any awards at Worlds that year, the experience fueled our passion for robotics and motivated us to continue improving and striving for excellence in future competitions and to truly become a world-class team.'
  },
   {
    id: 'second-nationals-win',
    title: 'Sustained Success: 2019 Competition Season',
    year: '2019',
    location: 'Melbourne, Australia',
    image: "/assets/img/RoboticsGallery/2019Nationals.jpg",
    description: 'After learning from world-class teams at the 2018-2019 World Championships, we were able to rapidly improve our skills and knowledge. The 2019 season was a breakthrough year for us, as we won our second National Championship and Excellence Award in the V5RC Tower Takeover season. This was a huge milestone for our team and validated all of our hard work and dedication. It also motivated us to continue pushing ourselves to achieve even greater success in the future. Because of this success our team had the opportunity to represent Australia at the 2019-2020 World Championships (which was unfortunately cancelled due to the Covid-19 Pandemic).'
  },
  {
    id: 'emu5-year1',
    title: 'New Beginnings: 2021-2022 Competition Season',
    year: '2022',
    location: 'Adelaide, Australia',
    image: "/assets/img/RoboticsGallery/nationals2022.png",
    description: 'After the conclusion of the 2019 season and the pandemic, we were excited to start fresh with a new team at the university level. I founded the EMU5 Robotics Team in early 2021, bringing together a group of passionate and talented students from various disciplines and finding funding through sponsors and grants. The 2021-2022 season was a year of learning and growth for our new team, we ran workshops and upskilled university students with little to no experience in robotics. We competed in the VURC Tipping Point season, which introduced new game elements and required us to develop more advanced strategies. Despite being a new team, we were able to win the inaugural VEX U National Championship and Excellence Award at the 2021-2022 National Championship, which was an incredible achievement and a testament to the dedication and hard work of our team members.'
  },
  {
    id: 'emu5-worlds1',
    title: 'EMU5 x USC: The Road To Worlds',
    year: '2022',
    location: 'Hollywood, California, USA',
    image: "/assets/img/RoboticsGallery/USC.jpg",
    description: 'In the leadup to the 2022 World Championship in Dallas, TX, we had the opportunity to collaborate with the University of Southern California (USC) VEX Robotics team (the previous worlds excellence award recipients), who were also preparing for Worlds. We worked closely with them to scrim and discuss strategy. This collaboration was an incredible experience that allowed us to travel their facilities and learn from one of the top teams in the world and to build connections within the global robotics community.'
  },
  {
    id: 'emu5-worlds2',
    title: 'The Real Roboticists Of Beverley Hills: The Road To Worlds',
    year: '2022',
    location: 'Beverly Hills, California, USA',
    image: "/assets/img/RoboticsGallery/BeverlyHills.jpg",
    description: 'After learning from the University of Southern California (USC) VEX Robotics team, we had the opportunity to collaborate with the Hardvard-Westlake High School VEX Robotics team, who were also preparing for the 2022 World Championship. We worked closely with them to scrim and act as role models. This collaboration was an incredible experience that allowed us to travel their facilities and learn from one of the top high school teams in the world while imparting our own wisdom and experience to them as well. It was a great opportunity to build connections within the global robotics community and to see how different teams approach the same challenges in unique ways.'
  },
  {
    id: 'emu5-worlds3',
    title: 'The Cutting Edge: 2021-2022 World Championship',
    year: '2022',
    location: 'Dallas, Texas, USA',
    image: "/assets/img/RoboticsGallery/placeholder.jpg",
    description: 'After all the hard work our team put in to develop a cutting edge strategy and approach to the 2021-2022 season game, we achieved our best performance at a World Championship, losing to USC by 1pt in the Division Semifinals, EMU5 won our first World Championship Award for our strategy and approach to the game, the 2022 World Innovate Award. This was an incredible achievement and a testament to the dedication and hard work of our team members, as well as the support and mentorship we received from other teams in the leadup to Worlds.'
  },
  {
    id: 'emu5-year2',
    title: 'Double Trouble: 2022-2023 National Championship',
    year: '2022',
    location: 'Sydney, Australia',
    image: "/assets/img/RoboticsGallery/2023Nationals.jpg",
    description: 'EMU5 won our second consecutive National Championship and Excellence Award at the 2022-2023 National Championship, which was an incredible achievement and a testament to the dedication and hard work of our team members. This win solidified our position as one of the top university robotics teams in Australia and motivated us to continue pushing ourselves to achieve even greater success in the future.'
  },
  {
    id: 'emu5-worlds4',
    title: 'Back To The World Stage: 2022-2023 World Championship',
    year: '2023',
    location: 'Dallas, Texas, USA',
    image: "/assets/img/RoboticsGallery/TeamAustraliaWorlds2024.jpg",
    description: 'EMU5 won our second consecutive National Championship and Excellence Award at the 2022-2023 National Championship, which was an incredible achievement and a testament to the dedication and hard work of our team members. This win solidified our position as one of the top university robotics teams in Australia and motivated us to continue pushing ourselves to achieve even greater success in the future.'
  },
  {
    id: 'emu5-year3',
    title: 'Breaking The Game: 2023-2024 National Championship',
    year: '2023',
    location: 'Adelaide, Australia',
    image: "/assets/img/RoboticsGallery/2024Nationals.jpg",
    description: 'After winning our second national championship, we were determined to break the game and push the boundaries of what was possible in the 2023-2024 season. We developed a revolutionary new strategy and approach that completely changed how the game was played and gave us a significant competitive advantage. Our hard work paid off as we won our third consecutive National Championship and Excellence Award at the 2023-2024 National Championship (to much controversy), which was an incredible achievement and a testament to the dedication and hard work of our team members. This win solidified our position as one of the top university robotics teams in Australia and motivated us to continue pushing ourselves to achieve even greater success in the future.'
  },
  {
    id: 'emu5-worlds5',
    title: 'Creating Success: 2023-2024 World Championship',
    year: '2024',
    location: 'Dallas, Texas, USA',
    image: "/assets/img/RoboticsGallery/2024Worlds.jpg",
    description: 'After our nationals winning strategy got patched, we had to rapidly adapt and create a new strategy in the leadup to the 2023-2024 World Championship. We worked tirelessly to develop a new approach that would allow us to be competitive on the world stage, and our hard work paid off as we won our second World Championship Award for our unique approach to programming and the work we were doing in creating public rust libraries for the VEX Robotics platform, the 2024 World Create Award. On top of this, our team spent the season developing groundbreaking tools in visualisation and path planning, allowing us to create autonomous paths accurately and smoothly with a GUI. This was an incredible achievement and a testament to the dedication and hard work of our team members, as well as our ability to adapt and innovate in the face of challenges.'
},
{
    id: 'emu5-year4',
    title: 'The Next Generation: Supporting The Future Of EMU5',
    year: '2025',
    location: 'Parkville, Melbourne',
    image: "/assets/img/RoboticsGallery/FinalTrophyHaulEMU5.jpg",
    description: 'After four years of success running EMU5 and leading the team to multiple national championships and world championship awards, I am now focused on supporting the next generation of leaders and innovators in the team. In 2025 I chose to step back from the role of team lead to allow new leadership to emerge and to provide mentorship and guidance to the new leaders and lay the foundation to sustain the team for years to come. I am excited to see how the team continues to grow and evolve in the future, and I am proud to have created and been apart of the team\'s journey and success over the years.'
},
];

export default function RoboticsGallery() {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x snap-mandatory">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            className="min-w-[300px] md:min-w-[400px] snap-center"
          >
            <div className="glass rounded-3xl overflow-hidden border-black/5 shadow-xl h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary flex items-center gap-1 shadow-sm">
                    <Calendar size={10} />
                    {item.year}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-accent flex items-center gap-1 shadow-sm">
                    <MapPin size={10} />
                    {item.location}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Camera size={18} className="text-accent" />
                  {item.title}
                </h4>
                <p className="text-sm text-primary/60 leading-relaxed italic">
                  "{item.description}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Custom Scrollbar Hint */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryItems.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/10" />
        ))}
      </div>
    </div>
  );
}
