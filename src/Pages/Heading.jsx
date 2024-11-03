const Heading = ({title, subTitle}) => {
    return (
        <div className="py-8 text-center">
            <h2 className="text-3xl font-thin">{title}</h2>
            <p className="pt-2">{subTitle}</p>
        </div>
    );
};

export default Heading;