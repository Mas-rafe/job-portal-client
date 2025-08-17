export const jobsCreatedByPromise = email => {
return fetch (`https://career-code-server-tawny.vercel.app/jobs?email=${email}`).then(res => res.json())
}