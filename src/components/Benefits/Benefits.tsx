import { HText } from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: 'State of the Art Facilities',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, repellendus architecto quod aliquid neque exercitationem rerum? Eaque similique nam consectetur, modi libero quam suscipit voluptate commodi animi possimus doloribus quos.'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: '100s of Diverse Classes',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, repellendus architecto quod aliquid neque exercitationem rerum? Eaque similique nam consectetur, modi libero quam suscipit voluptate commodi animi possimus doloribus quos.'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: 'Exper and Pro Trainers',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, repellendus architecto quod aliquid neque exercitationem rerum? Eaque similique nam consectetur, modi libero quam suscipit voluptate commodi animi possimus doloribus quos.'
    }
];



const Benefits = ({ setSelectedPage}: Props) => {

    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER  */}
                <motion.div className="md: my-5 md: w-3/5"
                initial='hidden' 
                whileInView='visible' 
                viewport={{ once: true, amount: 0.5}} 
                transition={{ duration: 0.7}} 
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                    </p>
                </motion.div>
                {/* BENEFITS  */}
                <motion.div 
                className="md: flex items-center justify-between gap-8 mt-5 "
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit 
                        key={benefit.title}
                        icon={benefit.icon} 
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}/>
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHICS */}
                    <img className="mx-auto" alt="benefits"  src={BenefitsPageGraphic} />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left before:z-[1] before:content-abstractwaves">
                                    <motion.div
                                    initial='hidden' 
                                    whileInView='visible' 
                                    viewport={{ once: true, amount: 0.5}} 
                                    transition={{ delay: 0.2, duration: 0.7}} 
                                    variants={{
                                        hidden: { opacity: 0, x: -50},
                                        visible: {opacity: 1, x: 0},
                                    }}>
                                        <HText>MILLIONS OF HAPPE MEMBERS GETTING {' '}
                                        <span className="text-primary-500">FIT</span></HText>
                                    </motion.div>
                                </div>

                            </div>
                        {/* DESCRIPT */}
                            <div>
                                <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                                </p>
                                <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                                </p>
                            </div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export { Benefits };