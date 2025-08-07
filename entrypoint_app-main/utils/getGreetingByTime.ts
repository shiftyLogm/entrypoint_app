const Greetings = new Map<(hour: number) => boolean, string>([
  [hour => hour < 12, 'content:screens:home:greetings:goodMorning'],
  [hour => hour >= 12 && hour < 18, 'content:screens:home:greetings:goodAfternoon'],
  [hour => hour >= 18, 'content:screens:home:greetings:goodEvening'],
]);

export const getGreetingByTime = (currentHours: number) => {
    for (const [predicate, greeting] of Greetings) {
        if (predicate(currentHours)) {
            return greeting;
        }
    }
}