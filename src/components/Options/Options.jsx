import css from "./Options.module.css"

export default function Options({ resetFeedback, updateFeedback, totalFeedback }) {
    
    return (
        <div className={css.option}>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 &&
                <button className={css.resetButton} onClick={resetFeedback}>Reset</button>
            }
        </div>
    );
}