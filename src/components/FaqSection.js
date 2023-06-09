import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import { LayoutGroup } from 'framer-motion';
import { useScroll } from './useScroll';
import { fade } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions? <span>FAQ</span></h2>
            <LayoutGroup>
                <Toggle title="Where Do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cum!</p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cum!</p>
                    </div>
                </Toggle>
                <Toggle title="Different payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cum!</p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cum!</p>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    overflow-x: hidden;
    
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #cccccc;
        height: .2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        
        p {
            padding: 1rem 0rem;
        }
    }

`;

export default FaqSection;