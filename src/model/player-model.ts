export interface PlayerMode {
    "id": number,
    "name": string,
    "club": string,
    "nationality": string,
    "position": string,
    "statistics": {
      "Overall": number,
      "Pace": number,
      "Shooting": number,
      "Dribbling": number,
      "Defending": number,
      "Physical": number
    }
  }
 