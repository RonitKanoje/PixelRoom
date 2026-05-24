const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-3 text-center text-white">
        <div className="h-12 w-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        <span className="text-lg font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
