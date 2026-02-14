using FastEndpoints;
using FluentValidation;

namespace BRF.Api.Features.Breweries.UpdateBrewery;

public class UpdateBreweryValidator : Validator<UpdateBreweryRequest>
{
    public UpdateBreweryValidator()
    {
        RuleFor(x => x.Id)
            .GreaterThan(0).WithMessage("A valid brewery Id is required.");

        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Brewery name is required.")
            .MaximumLength(200).WithMessage("Brewery name must not exceed 200 characters.");

        RuleFor(x => x.Country)
            .MaximumLength(100).When(x => x.Country is not null);

        RuleFor(x => x.City)
            .MaximumLength(100).When(x => x.City is not null);

        RuleFor(x => x.Website)
            .MaximumLength(500).When(x => x.Website is not null);
    }
}
