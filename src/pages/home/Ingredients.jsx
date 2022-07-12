
const Ingredients = ({ ingredients }) => {
    return (
        <div>
            {ingredients.map((item, index) => {
                return (
                    <div style={{ textAlign: "left" }} key={index}>
                        <p style={{ color: "white" }}>
                            <span style={{ color: "red" }}>{index + 1}</span> -
                            {item}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Ingredients;
