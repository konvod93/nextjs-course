const getRandomNumber = async () => {
    const response = await fetch('http://127.0.0.1:3000/api/random', {
        next: {
            revalidate: 5
        }
    })
    const data = await response.json()
    return data
}

export default async function SSR() {
    const { random }: any = await getRandomNumber()

    return (
        <main>
            <h2 className="font-bolder">{random}</h2>
        </main>
    );
}