const getSteps = (recipe) => {
    const steps = recipe.strInstructions;
    if (!steps) return [];

    return steps.split(/[\r\n]+/)
        .map(step => step.trim())
        .filter(step => {
            if (step === '') return false;

            // Loại bỏ những dòng chỉ có mỗi số thứ tự (Ví dụ: "1", "2", "Step 1")
            // Nếu dòng đó ngắn hơn 3 ký tự mà là số -> Bỏ
            if (!isNaN(step) && step.length < 3) return false;
            if (/^step\s+\d+$/i.test(step)) return false

            return true;
        })
}

export default getSteps