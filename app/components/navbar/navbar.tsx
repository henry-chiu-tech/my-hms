import Container from "../container";
import Logo from "./logo";

const Navbar = () => {
    return (
            <div className="fixed w-full bg-white z-10 shadow-md" >
                <div
                    className="
                        py-4
                        border-b-[1px]
                    "
                >
                    <Container>
                        <div
                            className="
                                flex
                                flex-row
                                items-center
                                justify-between
                                gap-3
                                md:gap-0
                            "
                        >
                            <Logo/>
                        </div>
                        <div
                            className="
                                text-xl
                                font-semibold
                                px-6
                            "
                        >
                            Welcome To Jim's Holiday House
                        </div>
                        
                    </Container>
                </div>
            </div>
        );
    };

export default Navbar;