import { Title } from './Headline.styled'; 


const Headline = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
        )
}

export default Headline;
