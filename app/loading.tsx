export default function Loading() {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-lg text-muted-foreground">Chargement en cours...</p>
        </div>
      </div>
    )
  }
  
  