using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class ArticleSeeder
{
    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.Articles.AnyAsync())
            return;

        var articles = new List<Article>
    {
        new()
        {
            Id = Guid.NewGuid(),
            Title = "The Art of the Hop Harvest: From Vine to Vessel",
            AuthorId = "Marcus Thorne",
            Tag = "Feature Article",
            PublishedAt = new DateTime(2024, 10, 24, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "Every autumn in Yakima Valley, the air carries the intoxicating scents of pine, citrus, and earth as the hop harvest begins. For brewers and hop growers alike, this is the most critical — and most celebrated — time of the brewing calendar." },
                new() { Type = ArticleSectionType.Heading, Text = "The Critical Window" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Harvest timing is everything. Pick too early and the hops yield grassy, underripe flavors that can overwhelm a delicate beer. Wait too long and the precious lupulin glands — the resinous yellow powder inside the hop cone that carries all that aroma and bitterness — begin to oxidize, resulting in cheesy, dull profiles that no brewer wants." },
                new()
                {
                    Type = ArticleSectionType.Images,
                    Images =
                    [
                        new() { Src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgJbxzi56YwAoimbQGZtpdgsqMrbbFYjw7ejKMJLZosMYVIVpncmot5ufqvVdFbUO5XnwZD_foDOGiNSiQAn1grQDyUDQJSSkMCpJIDDIyxhAFUQAtUvt447X07w0oUD-CUElOfs1zPqk-rGikw-CKa-nzVM7fhLMPwRoQovIl8f1Qzdh3aNxKwFjNYyWA1M8R90MuxdxvjhNL2-xaGmxDg9VJrVxxgUIFOLGmeoLOMRnsKoWEiuF2b2F1zzmPJBCDjIxJIU5-xkM", Alt = "Fresh hops", Caption = "Peak maturity lupulin glands." },
                        new() { Src = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ay2_wB3zodaXqKS4li2SZ4yk3GlI9y56ZZheTFBGQivEsPJBkXFRxNcE4DPmSH610XMHm4e8DZv_bhAOrXEMBzd66J_cdFP_a5hAW7ovVhhrcBOE9JEeCCJJgjHsypYiQAtfiCO7S96HHfHJ2pcLaYM-Pc91sgqBCb90xWDHAevB_myM0XBWGht4p0OFkjjnbLF0MbwE6MEZ3nh3yKWoGhST_bCZLimmLmepP4dMOwZr4WDgUM2KNwqFLtI6_3IgjFpfn9k0zYI", Alt = "Processing", Caption = "Processing the day's yield." },
                    ],
                },
                new() { Type = ArticleSectionType.Heading, Text = "Tradition Meets Technology" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Modern kilns can dry hops to precise moisture levels in a fraction of the time it once took. Yet many growers still rely on the time-honoured technique of rubbing a hop cone between their palms, assessing stickiness and scent with a tactile intimacy no sensor can replicate. The best operations blend both worlds." },
                new() { Type = ArticleSectionType.Quote, Text = "The hop harvest is the New Year's Eve of the brewing world. Everything leads up to it, and how it goes sets the tone for the entire year ahead." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Fresh-hop ales — sometimes called wet-hop ales — take this urgency to its logical extreme. These beers use hops within 24 hours of harvest, before they can be kilned or pelletized. The result is a fleeting, once-a-year style that beer lovers travel miles to taste." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "The Science of Carbonation",
            AuthorId = "Elena Vasquez",
            Tag = "Science",
            PublishedAt = new DateTime(2024, 10, 20, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "That lively tingle in every sip of beer is not magic — it's dissolved CO2 escaping the liquid as pressure drops. Understanding carbonation is key to both brewing great beer and appreciating what's in your glass." },
                new() { Type = ArticleSectionType.Heading, Text = "Natural vs Forced" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Natural carbonation occurs when residual yeast consumes a small priming sugar addition, producing CO2 inside a sealed vessel. This method, used for bottle-conditioned ales and traditional cask beers, tends to produce finer, more persistent bubbles. Forced carbonation — pumping CO2 directly into a sealed tank — is faster and more controllable, making it the standard for large-scale lager production." },
                new() { Type = ArticleSectionType.Heading, Text = "Volumes by Style" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Different styles demand different carbonation levels, measured in volumes of CO2. A cask ale might clock in at just 1.5 volumes — barely fizzy. A German Weizen can reach 4.0 volumes, giving it that characteristic effervescence. Most American ales and lagers settle comfortably in the 2.4–2.8 range." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Temperature matters too. Carbonation is more soluble in cold liquid, which is why a warm beer seems gassier and flat — the CO2 escapes more readily. Serving temperature isn't just about flavour; it fundamentally shapes how we perceive a beer's body and finish." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Barrel Aging: A Test of Ultimate Patience",
            AuthorId = "David Chen",
            Tag = "Deep Dive",
            PublishedAt = new DateTime(2024, 10, 18, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "Inside a darkened warehouse, rows of oak barrels breathe quietly. What entered as an imperial stout or a wild ale will emerge — months or years later — as something entirely transformed. Barrel aging is the closest craft brewing gets to alchemy." },
                new() { Type = ArticleSectionType.Heading, Text = "Choosing the Right Barrel" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Bourbon barrels are the most common vessel for aging dark beers. The charred American oak imparts vanilla, caramel, and coconut notes, along with residual whiskey that adds warmth and complexity. Wine barrels — Chardonnay, Pinot Noir, Cabernet — are favoured for sour ales, lending tannins, stone fruit, and subtle acidity." },
                new() { Type = ArticleSectionType.Heading, Text = "The Angel's Share" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Every year, a percentage of the barrel's contents evaporates through the porous oak — a loss brewers call the angel's share. In humid cellars it can be as low as two per cent; in dry, warm conditions it can exceed ten. This concentration effect intensifies flavours but reduces yield, which partly explains why barrel-aged beers command premium prices." },
                new() { Type = ArticleSectionType.Quote, Text = "You put your best beer into the barrel, and you wait. Some batches are transcendent. Some are drains. That's the gamble — and the glory." },
                new() { Type = ArticleSectionType.Paragraph, Text = "Patience, ultimately, is the brewmaster's most essential ingredient when it comes to barrel aging. There is no shortcut. The wood will give up its gifts on its own schedule." },
            ],
        },
        new()
        {
            Id = Guid.NewGuid(),
            Title = "Choosing the Right Glass for Every Style",
            AuthorId = "Anna Kowalski",
            Tag = "Guide",
            PublishedAt = new DateTime(2024, 10, 15, 0, 0, 0, DateTimeKind.Utc),
            CreatedAt = DateTime.UtcNow,
            Content =
            [
                new() { Type = ArticleSectionType.Paragraph, Text = "Glassware is the often-overlooked variable in beer appreciation. Pour the same beer into a pint glass and a tulip, and you'll taste two different beers. The shape concentrates aroma, controls foam, and influences how the liquid reaches your palate." },
                new() { Type = ArticleSectionType.Heading, Text = "Tulip for IPAs" },
                new() { Type = ArticleSectionType.Paragraph, Text = "The tulip glass — with its flared lip and bulbous body — is the perfect partner for aromatic beers like IPAs and Belgian ales. The shape funnels hop and ester aromas directly to the nose while the flare helps maintain a persistent head. If you own only one specialty glass, make it a tulip." },
                new() { Type = ArticleSectionType.Heading, Text = "Weizen Glass for Wheat Beers" },
                new() { Type = ArticleSectionType.Paragraph, Text = "The tall, slender Weizen glass accommodates the voluminous foam head that a hefeweizen produces, while providing enough volume for the full pour. The narrow base concentrates the yeast in the last third of the pour, so you can decide how much cloudiness to add." },
                new() { Type = ArticleSectionType.Heading, Text = "Snifter for Imperials" },
                new() { Type = ArticleSectionType.Paragraph, Text = "Strong, complex beers — barleywines, imperial stouts, barrel-aged ales — belong in a snifter. The small opening traps aroma, the wide bowl warms the beer gently in your hand (beneficial for high-ABV styles), and the smaller volume encourages slow, contemplative sipping." },
                new() { Type = ArticleSectionType.Heading, Text = "Pilsner Glass for Lagers" },
                new() { Type = ArticleSectionType.Paragraph, Text = "The tall, tapered Pilsner glass shows off the brilliant clarity and fine carbonation of a well-made lager. It keeps the beer cold longer than wide-mouthed vessels and the narrow opening helps retain that delicate, grassy hop aroma that defines the style." },
            ],
        },
    };

        db.Articles.AddRange(articles);
        await db.SaveChangesAsync();
    }
}