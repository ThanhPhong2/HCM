import React, { useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import gsap from 'gsap';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6C63FF22, #4ECDC422);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const thoughtsData = [
  {
    title: "Độc Lập Dân Tộc",
    description: "Tư tưởng về độc lập dân tộc gắn liền với tự do và hạnh phúc của nhân dân. Không có gì quý hơn độc lập, tự do.",
    icon: "🏛️"
  },
  {
    title: "Đoàn Kết Toàn Dân",
    description: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    icon: "🤝"
  },
  {
    title: "Đạo Đức Cách Mạng",
    description: "Cần, kiệm, liêm, chính, chí công vô tư. Đạo đức là gốc rễ của người cách mạng.",
    icon: "⭐"
  },
  {
    title: "Chủ Nghĩa Xã Hội",
    description: "Xây dựng chủ nghĩa xã hội với mục tiêu dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
    icon: "🌟"
  },
  {
    title: "Giáo Dục và Trồng Người",
    description: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
    icon: "📚"
  },
  {
    title: "Phát Triển Văn Hóa",
    description: "Văn hóa phải soi đường cho quốc dân đi. Xây dựng nền văn hóa mới với tinh thần dân tộc.",
    icon: "🎭"
  }
];

const Thoughts = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  const [props, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 200, friction: 20 }
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            rotation: -5
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax effect for background pattern
      gsap.to(".background-pattern", {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHover = (isHovered) => {
    set({
      scale: isHovered ? 1.05 : 1
    });
  };

  return (
    <ThoughtsSection ref={sectionRef}>
      <BackgroundPattern className="background-pattern" />
      <ThoughtsGrid>
        {thoughtsData.map((thought, index) => (
          <Card
            key={index}
            ref={el => cardsRef.current[index] = el}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            style={props}
          >
            <IconWrapper>
              {thought.icon}
            </IconWrapper>
            <Title>{thought.title}</Title>
            <Description>{thought.description}</Description>
          </Card>
        ))}
      </ThoughtsGrid>
    </ThoughtsSection>
  );
};

export default Thoughts; 