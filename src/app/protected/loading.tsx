export default function ProtectedLoading() {
  return (
    <div className="flex-1 w-full flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-sm text-muted-foreground">Loading protected content...</p>
      </div>
    </div>
  );
}
