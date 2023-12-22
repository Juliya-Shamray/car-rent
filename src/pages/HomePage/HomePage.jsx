import {
  MotionStyledSubTitle,
  MotionStyledTitle,
  StyleList,
  StyledButton,
  StyledWrap,
  StyledWrapper,
} from './HomePage.styled';
import { motion } from 'framer-motion';

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: 1.5 * i * 0.5,
    },
  }),
  hidden: { opacity: 0 },
};
export const HomePage = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <MotionStyledTitle
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          AutoHaven: Find, Rent, Go!!!
        </MotionStyledTitle>
        <StyledWrap>
          <MotionStyledSubTitle
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Advantages:
          </MotionStyledSubTitle>
          <StyleList>
            <motion.li
              initial="hidden"
              custom={1}
              animate="visible"
              variants={variants}
            >
              Flexibility to travel at your own pace.
            </motion.li>
            <motion.li
              initial="hidden"
              custom={2}
              animate="visible"
              variants={variants}
            >
              Access to a wider range of destinations.
            </motion.li>
            <motion.li
              initial="hidden"
              custom={3}
              animate="visible"
              variants={variants}
            >
              Convenience for airport or city exploration.
            </motion.li>
            <motion.li
              initial="hidden"
              custom={4}
              animate="visible"
              variants={variants}
            >
              Ideal for business travelers, tourists, and those with temporary
              transportation needs.
            </motion.li>
          </StyleList>

          <StyledButton to="/catalog">Get started</StyledButton>
        </StyledWrap>
      </div>
    </StyledWrapper>
  );
};
