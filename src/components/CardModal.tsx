export type Fields = {
    id: string;
    imgUrl: string;
    title: string;
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
                    backgroundColor: "#6d6875",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                >
                    <img src={data?.imgUrl} alt={data?.title} />
                    <div>{data?.title}</div>
                    <div>{data?.accession_number}</div>
                    <button onClick={handleCloseButton}>CLOSE</button>
                </div>
            </div>
        </>
    );
};

export default CardModal;
