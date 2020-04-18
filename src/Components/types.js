export type Competitor = {
    firstName: string,
    lastName: string,
    competitorID: number
}

export type Bout = {
    competitorA: Competitor,
    competitorB: Competitor,
    scoreA: number,
    scoreB: number,
    winner: Competitor
}

