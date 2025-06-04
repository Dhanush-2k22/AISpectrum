import React from 'react';
import { colors, typography } from '../styles/commonStyles';

const TrackBox = ({ themeTitle, topics }) => {
  return (
    <div
      style={{
        background: colors.blue,
        color: colors.white,
        borderRadius: '14px',
        padding: '27px',
        width: '350px',
        textAlign: 'center',
        marginBottom: '27px',
        boxShadow: '0 9px 18px rgba(0, 0, 0, 0.5)',
        border: '4.5px solid #BCC6CC',
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 13.5px 27px rgba(0, 0, 0, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 9px 18px rgba(0, 0, 0, 0.5)';
      }}
    >
      <h3
        style={{
          margin: '0 0 15px 0',
          fontFamily: typography.heading.fontFamily,
          fontWeight: '800',
          letterSpacing: '0.5px',
          color: colors.yellow,
          fontSize: '1.4em',
          minHeight: '3.6em', // Ensure consistent height for title area
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {themeTitle}
      </h3>
      <ul
        style={{
          textAlign: 'left',
          paddingLeft: '20px',
          margin: '0',
          flexGrow: 1, // Allow list to take up available space
        }}
      >
        {topics.map((topic, index) => (
          <li
            key={index}
            style={{
              color: colors.white,
              fontFamily: typography.body.fontFamily,
              fontSize: '0.95em',
              lineHeight: '1.6',
              marginBottom: '8px',
            }}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ConferenceTracks = () => {
  const tracks = [
    {
      themeTitle: "Origin, Evolution, and Development of AI Technologies",
      topics: [
        "Evolution of Machine Learning Algorithms",
        "Neural Networks: From Perceptrons to Deep Learning",
        "Perspectives on AI Research",
        "Reinforcement Learning Development",
        "AI Hardware Evolution (CPUs → GPUs → TPUs)",
        "Benchmarking and Dataset Evolution",
        "Explainability in Early AI Systems",
      ],
    },
    {
      themeTitle: "Transforming Industries, Societies, and Workspaces",
      topics: [
        "AI in Healthcare: Diagnosis, Imaging, Drug Discovery",
        "Smart Manufacturing and Industry 4.0",
        "AI in Education and Personalized Learning",
        "Smart Cities and Urban Intelligence",
        "AI and Ethics in Society",
        "Societal and Behavioral Impacts of AI",
        "AI Regulations and Policy Frameworks",
      ],
    },
    {
      themeTitle: "Future Trends, Innovations, and the Next Frontiers of AI",
      topics: [
        "Artificial General Intelligence (AGI)",
        "Quantum Machine Learning",
        "Federated Learning and Data Privacy",
        "Trustworthy and Transparent AI",
        "Emotionally Intelligent AI",
        "Autonomous Vehicles and Robotics",
        "Edge AI and Next-Gen Hardware",
      ],
    },
    {
      themeTitle: "Breakthroughs & Cross-Disciplinary Disruptions",
      topics: [
        "Agentic AI and Next-Gen Autonomous Agents",
        "Large Language Models as Generalist Agents (GPT, Claude, Gemini)",
        "AI-Augmented Creativity and Generative Design",
        "AI + Blockchain: Decentralized Intelligence",
        "Digital Twins and Simulation-Based AI",
        "AI in the Metaverse and XR (VR/AR/MR)",
        "Synthetic Data and Data-Centric AI",
      ],
    },
  ];

  return (
    <>
      <h2 style={{
        fontFamily: typography.heading.fontFamily,
        fontSize: '2.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '60px',
        marginTop: '60px',
        color: colors.blue,
        position: 'relative',
      }}>
        CONFERENCE TRACKS & TOPICS
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '4px',
          background: colors.yellow,
          borderRadius: '2px',
        }} />
      </h2>
      <section style={{
        marginBottom: '60px',
        background: colors.blue,
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '20px',
      }}>
        <p style={{
          fontSize: '1.1em',
          marginTop: '15px',
          lineHeight: '1.6',
          maxWidth: '900px',
          margin: '0 auto 15px',
          textAlign: 'justify-center',
          textJustify: 'inter-word',
          color: colors.white,
          fontFamily: typography.body.fontFamily,
        }}>
          We invite researchers, academicians, industry professionals, and practitioners to submit original papers on the foundations, applications, and future directions of Artificial Intelligence. The conference welcomes research articles, reviews, and technical contributions across various fields. Submissions spanning the full spectrum of AI, particularly those that bridge disciplines or explore emerging areas, are especially encouraged.
        </p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: '30px',
          marginTop: '40px'
        }}>
          {tracks.map((track, index) => (
            <TrackBox
              key={index}
              themeTitle={track.themeTitle}
              topics={track.topics}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ConferenceTracks;