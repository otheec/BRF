using FastEndpoints;
using FluentValidation;

namespace BRF.Api.Features.Beers.UpdateBeer;

public class UpdateBeerValidator : Validator<UpdateBeerRequest>
{
    public UpdateBeerValidator()
    {
        RuleFor(x => x.Id)
            .GreaterThan(0).WithMessage("A valid beer Id is required.");

        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Beer name is required.")
            .MaximumLength(200).WithMessage("Beer name must not exceed 200 characters.");

        RuleFor(x => x.Style)
            .MaximumLength(100).When(x => x.Style is not null);

        RuleFor(x => x.Abv)
            .InclusiveBetween(0m, 100m).When(x => x.Abv is not null)
            .WithMessage("ABV must be between 0 and 100.");

        RuleFor(x => x.BreweryId)
            .GreaterThan(0).When(x => x.BreweryId is not null)
            .WithMessage("A valid brewery Id is required.");
    }
}
