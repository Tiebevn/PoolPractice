export type Competitor = {
    firstName: string,
    lastName: string,
}

export type Bout = {
    competitorA: Competitor,
    competitorB: Competitor,
    scoreA: number,
    scoreB: number,
    winner: Competitor
}

