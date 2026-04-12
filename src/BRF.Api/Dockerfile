# ── Stage 1: Build & publish ──────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY BRF.Api.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# ── Stage 2: Production runtime ──────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

RUN addgroup --system --gid 1001 appgroup && \
    adduser  --system --uid 1001 appuser --ingroup appgroup

COPY --from=build --chown=appuser:appgroup /app/publish .

USER appuser

EXPOSE 8080

ENTRYPOINT ["dotnet", "BRF.Api.dll"]