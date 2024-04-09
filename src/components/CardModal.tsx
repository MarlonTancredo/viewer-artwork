export type Fields = {
    id: string;
    title: string;
    imgUrl: string;
    accession_number: string;
    cardClick: string;
};

export type Data = {
    data?: Fields;
    getClosedButtonClicked: (data: string) => void;
};

const CardModal = ({ data, getClosedButtonClicked }: Data) => {
    const handleCloseButton = () => {
        getClosedButtonClicked("click");
    };

    return (
        <>
            <div
                style={{
                    zIndex: "2",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100vw",
                    }}
                >
                    <img
                        src={data?.imgUrl}
                        alt={data?.title}
                        style={{ width: "100vw", objectFit: "cover", objectPosition: "top" }}
                    />
                    <div>{data?.title}</div>
                    <div>{data?.accession_number}</div>
                    <button onClick={handleCloseButton}>CLOSE</button>
                </div>
            </div>
        </>
    );
};

export default CardModal;
