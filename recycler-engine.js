// Protect recycler page
if (window.location.pathname.includes("recycler.html")) {
    const email = localStorage.getItem("userEmail");
    if (!email) {
        window.location.href = "signin.html";
    }
}
function recycleIdea() {
    const input = document.getElementById("ideaInput").value.trim();
    const output = document.getElementById("output");
    const level = parseInt(document.getElementById("level").value);

    if (input === "") {
        output.innerHTML = "Please enter an idea!";
        return;
    }

    loading.classList.remove("hidden");
    output.innerHTML = "";

    setTimeout(() => {

        // -------------------------
        // 1. GENERATIVE FEATURE POOLS
        // -------------------------

        const aiFeatures = [
            "predictive AI engine",
            "self-learning neural system",
            "adaptive intelligence layer",
            "real-time behavioral analytics",
            "deep personalization algorithm",
            "emotion-aware recommendation system"
        ];

        const futuristicTech = [
            "AR/VR immersive interface",
            "blockchain governance model",
            "quantum-inspired optimization",
            "digital twin simulation",
            "brain-computer interaction module",
            "autonomous agent framework"
        ];

        const monetizationModels = [
            "token-based reward economy",
            "subscription intelligence model",
            "AI-driven ad personalization",
            "micro-transaction gamification",
            "community-driven crowdfunding layer"
        ];

        const impactAngles = [
            "improving user engagement",
            "reducing operational costs",
            "maximizing scalability",
            "enhancing decision-making",
            "creating global accessibility",
            "automating complex workflows"
        ];

        // -------------------------
        // 2. RANDOM SELECTION ENGINE
        // -------------------------

        function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        const feature1 = pickRandom(aiFeatures);
        const feature2 = pickRandom(futuristicTech);
        const feature3 = pickRandom(monetizationModels);
        const impact = pickRandom(impactAngles);

        // -------------------------
        // 3. STAGE-BASED COMPLEXITY BUILDER
        // -------------------------

        let transformedIdea = "";
        let innovationScore = 65 + Math.floor(Math.random() * 10);
        let feasibilityScore = 85 - Math.floor(Math.random() * 10);

        if (level === 1) {
            transformedIdea =
                `An improved ${input} integrating ${feature1}, focused on ${impact}.`;
            innovationScore += 5;
        }

        if (level === 2) {
            transformedIdea =
                `A next-gen ${input} powered by ${feature1} and ${feature3}, strategically designed for ${impact}.`;
            innovationScore += 15;
            feasibilityScore -= 5;
        }

        if (level === 3) {
            transformedIdea =
                `An autonomous ${input} enhanced with ${feature1}, ${feature2}, and ${feature3}, transforming the way we approach ${impact}.`;
            innovationScore += 25;
            feasibilityScore -= 10;
        }

        if (level === 4) {
            transformedIdea =
                `A self-evolving ecosystem built around ${input}, combining ${feature1}, ${feature2}, ${feature3}, and decentralized intelligence architecture to revolutionize ${impact}.`;
            innovationScore += 40;
            feasibilityScore -= 20;
        }

        // -------------------------
        // 4. DYNAMIC SCORING
        // -------------------------

        innovationScore = Math.min(99, innovationScore);
        feasibilityScore = Math.max(40, feasibilityScore);

        // -------------------------
        // 5. FINAL OUTPUT
        // -------------------------

        output.innerHTML = `
            ${transformedIdea}
            <br><br>
            Innovation Score: ${innovationScore}/100 <br>
            Feasibility Score: ${feasibilityScore}/100
        `;

        loading.classList.add("hidden");

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

    }, 1500);
}
// ---------------- LOGIN ----------------


// ---------------- PROFILE AUTO LOAD ----------------


// ---------------- NAVIGATION ----------------




function convertIdea() {
    const idea = document.getElementById("ideaInput").value;

    if (!idea) {
        document.getElementById("result").innerHTML = "Please enter an idea!";
        return;
    }

    const creativeIdeas = [
        "Turn it into an AI-powered app.",
        "Gamify it with rewards system.",
        "Make it futuristic with AR/VR.",
        "Convert it into a social platform.",
        "Add automation & smart features."
    ];

    const random = creativeIdeas[Math.floor(Math.random() * creativeIdeas.length)];

    document.getElementById("result").innerHTML =
        "🚀 Creative Version: " + idea + " → " + random;
}