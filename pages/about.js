import Link from 'next/link';


const About = () => {
    
    return (
        <div>
            <h1>This will be my About page.</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    );
}

export default About;