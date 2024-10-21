// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ResourceSharing {
    
    // Structure for a computational resource
    struct Resource {
        address payable provider;
        string description;
        uint256 CPUMHz;
        uint256 TFLOPS;
        uint256 GBs;
        uint256 pricePerHour; // Price per hour in wei
        bool isAvailable;
        uint256 totalRating;
        uint256 ratingCount;
    }
    
    // Structure for a rental agreement
    struct Rental {
        address payable renter;
        uint256 startTime;
        uint256 duration; // in hours
        bool isActive;
        uint256 amountPaid;
        string task;
    }
    
    struct Task {
        address payable provider;
        address payable renter;
        string task;
        string result;
    }

    // Mapping for resources and rentals
    // Resource[] public resourceList;
    mapping (uint256 => Resource) public resourceList;
    mapping (uint256 => Rental) public rentals;
    mapping (uint256 => Task) public results;
    
    uint256 public resourceCount; // Total number of resources
    uint256 public resultCount;

    // Events
    event ResourceListed(uint256 resourceId, address provider, uint256 pricePerHour);
    event ResourceRented(uint256 resourceId, address renter, uint256 duration, uint256 amountPaid);
    event ResourceRated(uint256 resourceId, address rater, uint8 rating);
    event RentalCalled(Rental rental);
    event ResourceCalled(Resource rental);

    // Function for listing a resource
    function listResource(string memory _description, uint256 _pricePerHour, uint256 _CPUMHz, uint256 _TFLOPS, uint256 _GBs) public {
        resourceList[resourceCount] = Resource({
                    provider: payable(msg.sender),
                    description: _description,
                    CPUMHz: _CPUMHz,
                    TFLOPS: _TFLOPS,
                    GBs: _GBs,
                    pricePerHour: _pricePerHour,
                    isAvailable: true,
                    totalRating: 0,
                    ratingCount: 0
                });
        resourceCount++;
        
        emit ResourceListed(resourceCount, msg.sender, _pricePerHour);
    }

    // Function for renting a resource
    function rentResource(uint256 _resourceId, uint256 _duration, string memory _task) public payable {
        Resource storage resource = resourceList[_resourceId];
        require(resource.isAvailable, "Resource not available");
        uint256 cost = resource.pricePerHour * _duration;
        require(msg.value >= cost, "Insufficient payment");

        rentals[_resourceId] = Rental({
            renter: payable(msg.sender),
            startTime: block.timestamp,
            duration: _duration,
            isActive: true,
            amountPaid: cost,
            task: _task
        });

        resource.isAvailable = false; // Mark resource as unavailable during rental
        
        emit ResourceRented(_resourceId, msg.sender, _duration, msg.value);
    }

    // Function to complete rental and release funds
    function completeRental(uint256 _resourceId, string memory _result) external payable {
        Resource storage resource = resourceList[_resourceId];
        Rental storage rental = rentals[_resourceId];
        require(rental.isActive, "Rental not active");
        uint256 unclockTime = rental.startTime + (rental.duration*10);
        // require(block.timestamp >= unclockTime, "Rental period not over");
        require(payable(msg.sender) == rental.renter || msg.sender == resource.provider, "Only renter or provider can complete rental");
        require(msg.value >= rental.amountPaid, "Insufficient balance");

        rental.isActive = false;
        resource.isAvailable = true;

        results[resultCount] = Task({
            provider: resource.provider,
            renter: rental.renter,
            task: rental.task,
            result: _result
        });
        resultCount++;

        // Transfer funds to provider
        resource.provider.transfer(msg.value);
        
    }

    // Function to rate a resource provider
    function rateResource(uint256 _resourceId, uint8 _rating) public {
        require(_rating >= 1 && _rating <= 5, "Rating should be between 1 and 5");

        Resource storage resource = resourceList[_resourceId];
        resource.totalRating += uint256(_rating);
        resource.ratingCount++;

    }

    // Function to get the average rating of a resource
    function getAverageRating(uint256 _resourceId) public view returns (uint256) {
        Resource storage resource = resourceList[_resourceId];
        if (resource.ratingCount == 0) {
            return 0;
        }
        return resource.totalRating / resource.ratingCount;
    }

    // Function to get the current rental status
    function getRentalStatus(uint256 _resourceId) public view returns (bool) {
        return rentals[_resourceId].isActive;
    }
    function getTimestamp() public view returns (uint256) {
        return block.timestamp;
    }
}
